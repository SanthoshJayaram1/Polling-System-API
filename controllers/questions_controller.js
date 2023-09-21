import Option from '../models/option.js';
import Question from '../models/question.js';

// To create a question
export const createQuestion = async (req, res) => {
  try {
    // get title from req.body
        const { title } = req.body;
        // validate it , it should not be empty
        if (!title) {
          return res.status(400).json({
            message: 'title is required for creating question',
          });
        }
        // create question document inside database collection
        const question = await Question.create({
          title,
        });
        // send success response
        res.status(200).json({
          success: true,
          question,
        });
  } catch (err) {
        console.log('*******', err);
        return res.status(500).json({
          message: 'Internal server error',
        });
  }
};

// To create an option
export const createOptions = async (req, res) => {
  try {
    // get question id from req.params
    const questionId = req.params.id;
    // get text as option from req.body
    const { text } = req.body;
    // validate text it should not be empty
    if (!text) {
      return res.status(400).json({
        message: 'text required for creating option',
      });
    }
    // now search for question through id from database
    const question = await Question.findById(questionId);

    if (!question) {
      // if question doesnt exist send notfound response
      return res.status(400).json({
        message: 'question not found!',
      });
    }
    // if it is found then create option inside that found question
    const option = await Option.create({
      text,
      question,
    });

    // create link_to_vote using _id of option
    const link_to_vote = `https://${req.get('host')}/options/${option.id}/add_vote`;

    option.link_to_vote = link_to_vote;

    option.save();

    // put reference of option in question schema
    await question.updateOne({ $push: { options: option } });

    return res.status(200).json({
      success: true,
      option,
    });
  } catch (err) {
    console.log('*******', err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

// To delete a question
export const deleteQuestion = async (req, res) => {
  try {
    // get id of the question to be deleted from req.params
    const questionId = req.params.id;
    // search for which question that id belongs
    const question = await Question.findById(questionId);
    // if not found send 404 error
    if (!question) {
      return res.status(400).json({
        message: 'question not found',
      });
    }
    // even if one of the options of question has votes. It won't be deleted
    if (question.totalVotes > 0) {
      return res.status(400).json({
        message: 'atleast one of options has votes',
      });
    }
    // delete all the options of the question
    await Option.deleteMany({ question: questionId });

    // delete question
    await Question.findByIdAndDelete(questionId);

    return res.status(200).json({
      success: true,
      message: 'question and associated options deleted successfully!',
    });
  } catch (err) {
    console.log('*******', err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

// To view a question and it's options
export const viewQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    // populate question with all of its options
    const question = await Question.findById(questionId).populate({
      path: 'options',
      model: 'Option',
    });
  // if not found
    if (!question) {
      return res.status(400).json({
        message: 'question not found',
      });
    }

    return res.status(200).json({
      success: true,
      question,
    });
  } catch (err) {
    console.log('*******', err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};
