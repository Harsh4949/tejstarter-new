import { databases, storage, appwriteConfig, ID, Query } from '../conf/conf.js';

class DatabaseService {
    async createUserProfile(userData) {
        try {
            // Only include fields that EXIST in your Appwrite collection
            const documentData = {
                name: userData.name,
                Email: userData.email,  // Capital E as per your schema
                phone: userData.phone,
                password: userData.password,
                role: userData.role,
                location: userData.location,
                agree: userData.agree,
            };

            // Add optional fields only if they exist in your schema AND have values
            if (userData.dob) documentData.dob = userData.dob;
            if (userData.educationLevel) documentData.educationLevel = userData.educationLevel;
            if (userData.subLevel) documentData.subLevel = userData.subLevel;
            if (userData.majorField) documentData.majorField = userData.majorField;
            if (userData.college) documentData.college = userData.college;
            if (userData.companyUrl) documentData.companyUrl = userData.companyUrl;
            if (userData.userId) documentData.id = userData.userId; // Map userId to id field
            
            const document = await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.userCollectionId,
                ID.unique(),
                documentData
            );
            return document;
        } catch (error) {
            console.error('Appwrite service :: createUserProfile :: error', error);
            throw error;
        }
    }

    async getUserProfile(userId) {
        try {
            const documents = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.userCollectionId,
                [Query.equal('id', userId)] // Use 'id' field instead of 'userId'
            );
            return documents.documents[0] || null;
        } catch (error) {
            console.error('Appwrite service :: getUserProfile :: error', error);
            return null;
        }
    }

    async updateUserProfile(documentId, userData) {
        try {
            const document = await databases.updateDocument(
                appwriteConfig.databaseId,
                appwriteConfig.userCollectionId,
                documentId,
                userData
            );
            return document;
        } catch (error) {
            console.error('Appwrite service :: updateUserProfile :: error', error);
            throw error;
        }
    }

    async uploadFile(file) {
        try {
            const uploadedFile = await storage.createFile(
                appwriteConfig.bucketId,
                ID.unique(),
                file
            );
            return uploadedFile;
        } catch (error) {
            console.error('Appwrite service :: uploadFile :: error', error);
            throw error;
        }
    }

    async getFilePreview(fileId) {
        try {
            const fileUrl = storage.getFilePreview(
                appwriteConfig.bucketId,
                fileId
            );
            return fileUrl;
        } catch (error) {
            console.error('Appwrite service :: getFilePreview :: error', error);
            return null;
        }
    }

    async deleteFile(fileId) {
        try {
            await storage.deleteFile(appwriteConfig.bucketId, fileId);
            return true;
        } catch (error) {
            console.error('Appwrite service :: deleteFile :: error', error);
            return false;
        }
    }
}

const databaseService = new DatabaseService();
export default databaseService;