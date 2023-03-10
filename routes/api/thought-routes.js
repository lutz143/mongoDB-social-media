const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts)

// api/thoughts
router.route('/').post(addThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getThoughtById)
.delete(deleteThought)
.put(updateThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);


module.exports = router;
