const router = require('express').Router();
const { 
    createReview, 
    getPublicReviews, 
    getAllReviews, 
    updateReviewStatus, 
    deleteReview 
} = require('../controllers/reviewController');


router.get('/public', getPublicReviews);


router.post('/', createReview);       // Review Bhejna
router.get('/', getAllReviews);       // Saare Reviews Dekhna (Admin)

router.put('/:id', updateReviewStatus); // Approve/Reject karna
router.delete('/:id', deleteReview);    // Delete karna

module.exports = router;