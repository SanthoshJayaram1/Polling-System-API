import mongoose from "mongoose";

// create schema for question
const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    options: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option' }],
    totalVotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// creating document model and export
const Question = mongoose.model('Question', questionSchema);

export default Question;
