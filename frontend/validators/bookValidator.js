const Joi = require('joi');

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    publishedYear: Joi.number().integer().min(1000).max(new Date().getFullYear()).required(),
    isbn: Joi.string().length(13).required(),
    description: Joi.string().allow(''),
    available: Joi.boolean()
});

module.exports = bookSchema;