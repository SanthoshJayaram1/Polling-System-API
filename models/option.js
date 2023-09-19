import mongoose from "mongoose";

// schema for options
const optionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
    link_to_vote: {
      type: String,
    },
    question:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// creating document model and export
const Option = mongoose.model('Option', optionSchema);

export default Option;
