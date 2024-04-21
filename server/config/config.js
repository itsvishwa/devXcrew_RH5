require('dotenv').config();

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    STORAGE_URI: process.env.STORAGE_URI,
    BRAIN_GPT_SECRET: process.env.BRAIN_GPT_SECRET
};