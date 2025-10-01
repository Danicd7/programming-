const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getBooks);            // GET all
router.post('/', bookController.createBook);         // POST new
router.put('/:id', bookController.updateBook);       // PUT update by ID
router.delete('/:id', bookController.deleteBook);    // DELETE by ID

module.exports = router;

const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    return res.status(401).json({ message: 'Unauthorized' });
};

router.post('/', ensureAuth, bookController.createBook);
router.put('/:id', ensureAuth, bookController.updateBook);
router.delete('/:id', ensureAuth, bookController.deleteBook);