const { BlobServiceClient } = require('@azure/storage-blob');
const {STORAGE_URI} = require('../config/config')


const blobServiceClient = BlobServiceClient.fromConnectionString(STORAGE_URI);

async function generateUploadUrl(containerName, blobName) {

    const containerClient = blobServiceClient.getContainerClient(containerName);

    const blobClient = containerClient.getBlockBlobClient(blobName);

    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + 60);
    const sasToken = await blobClient.generateSasUrl({
        permissions: 'write',
        expiresOn: expiryTime
    });

    const uploadUrl = `${blobClient.url}?${sasToken}`;

    return uploadUrl;
}

module.exports = {
    generateUploadUrl
}