const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

// Aggregate function to get the number of overall thoughts
const thoughtCount = async () =>
  Thought.find()
    .count('thoughtCount')
    .then((numberOfThoughts) => numberOfThoughts);

// Aggregate function for getting the overall grade using $avg
// const grade = async (studentId) =>
//   Student.aggregate([
//     // only include the given student by using $match
//     { $match: { _id: ObjectId(studentId) } },
//     {
//       $unwind: '$assignments',
//     },
//     {
//       $group: {
//         _id: ObjectId(studentId),
//         overallGrade: { $avg: '$assignments.score' },
//       },
//     },
//   ]);

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then(async (thoughts) => {
        const thoughtsObj = {
          thoughts,
          thoughtCount: await thoughtCount(),
        };
        return res.json(thoughtsObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a thought by ID
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({
              thought              
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },  
  // create a new thought tagged to a user
  addThought(req, res) {
    console.log('You are adding a new thought!');
    console.log(req.body);
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id }},
          { new: true }
        );
      })
      .then(async (user) => 
        !user
        ? res.status(404).json({ message: 'No associated user' })
        : res.json({
            user
        })
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thought and remove them from the tagged user
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought with that ID exists' })
          : User.findOneAndUpdate(
              { _id: req.params.username },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought deleted, but no user found',
            })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Add a reaction to a thought
  addReaction(req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { assignments: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove reaction from a thought
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
