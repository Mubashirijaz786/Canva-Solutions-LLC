const router = require('express').Router();
const { createBlog, getAllBlogs, getBlogById, deleteBlog } = require('../controllers/blogController');

router.post('/', createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.delete('/:id', deleteBlog);

module.exports = router;