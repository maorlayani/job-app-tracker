import { Client, ID, Storage } from "appwrite"
import { APPWRITE_BUCKET_ID, APPWRITE_PROJECT_ID } from "../secret"

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(APPWRITE_PROJECT_ID)

const storage = new Storage(client)

export const appwriteUploadService = {
    uploadFile,
    deleteFile,
    downloadFile
}

async function uploadFile(file: any) {
    try {
        const res = await storage.createFile(APPWRITE_BUCKET_ID, ID.unique(), file)
        console.log('res', res);
        return { id: res.$id, name: res.name }
    } catch (err) {
        console.error('Cannot upload file', err)
    }
}
async function deleteFile(fileId: string) {
    try {
        const res = await storage.deleteFile(APPWRITE_BUCKET_ID, fileId)
        console.log(res);
        return res
    } catch (err) {
        console.error('Cannot download file', err)
    }
}
function downloadFile(fileId: string) {
    try {
        const res = storage.getFileDownload(APPWRITE_BUCKET_ID, fileId)
        return res.href
    } catch (err) {
        console.error('Cannot download file', err)
    }
}