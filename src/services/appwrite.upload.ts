import { Client, ID, Storage } from "appwrite"
// import { APPWRITE_BUCKET_ID, APPWRITE_PROJECT_ID } from "../secret"

const CURR_APPWRITE_PROJECT_ID: any = process.env.REACT_APP_APPWRITE_PROJECT_ID
    ? process.env.REACT_APP_APPWRITE_PROJECT_ID
    : ''

const CURR_APPWRITE_BUCKET_ID: any = process.env.REACT_APP_APPWRITE_BUCKET_ID
    ? process.env.REACT_APP_APPWRITE_BUCKET_ID
    : ''


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(CURR_APPWRITE_PROJECT_ID)

const storage = new Storage(client)

export const appwriteUploadService = {
    uploadFile,
    deleteFile,
    downloadFile
}

async function uploadFile(file: any) {
    try {
        const res = await storage.createFile(CURR_APPWRITE_BUCKET_ID, ID.unique(), file)
        return { id: res.$id, name: res.name }
    } catch (err) {
        console.error('Cannot upload file', err)
    }
}
async function deleteFile(fileId: string) {
    try {
        const res = await storage.deleteFile(CURR_APPWRITE_BUCKET_ID, fileId)
        return res
    } catch (err) {
        console.error('Cannot download file', err)
    }
}
function downloadFile(fileId: string) {
    try {
        const res = storage.getFileDownload(CURR_APPWRITE_BUCKET_ID, fileId)
        return res.href
    } catch (err) {
        console.error('Cannot download file', err)
    }
} 