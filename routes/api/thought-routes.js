const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts)

// api/thoughts
router.route('/:userId').post(addThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById)
.put(addThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);


// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/reactionId').delete(deleteReaction);

module.exports = router;
