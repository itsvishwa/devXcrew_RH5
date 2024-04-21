const { v4: uuidv4 } = require('uuid');
const {generateUploadUrl} = require('../services/azure.services')

const genSignUrl =  async (req, res) => {
    try {
        const containerName  = "TESTS";

        const blobName = uuidv4();

        const uploadUrl = await generateUploadUrl(containerName, blobName);

        res.json({ uploadUrl, blobName });
    } catch (error) {
        console.error('Error generating upload URL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    genSignUrl
};