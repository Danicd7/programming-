const Book = require('../models/Book');

// GET all books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST create book
exports.createBook = async (req, res) => {
    const { error } = bookValidator.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT update book
exports.updateBook = async (req, res) => {
    const { error } = bookValidator.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Book not found' });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE book
exports.deleteBook = async (req, res) => {
    try {
        const deleted = await Book.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};