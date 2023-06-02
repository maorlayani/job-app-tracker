// import Axios from 'axios'
import { User, UserCredentials } from "../models/interfaces";
import { Client, Account, ID, Avatars } from 'appwrite';

import { APPWRITE_PROJECT_ID } from '../secret';

const client = new Client();
const avatars = new Avatars(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(APPWRITE_PROJECT_ID);
const account = new Account(client);

// const BASE_URL = process.env.NODE_ENV === 'production'
//     ? '/api/'
//     : '//localhost:3030/api/'


// var axios = Axios.create({
//     withCredentials: true
// })

export const userService = {
    signup,
    login,
    logout,
    getUserInitials,
    UpdaeUser
}

async function signup(userCred: User) {
    try {
        const res = await account.create(ID.unique(), userCred.email, userCred.password, userCred.username)
        if (res.status) {
            const session = await setSessionUser({ email: userCred.email, password: userCred.password })
            return { username: res.name, email: res.name, sessionId: session.$id, creatdedAt: res.$createdAt, updatedAt: res.$updatedAt }
        }
        return null
    } catch (err) {
        console.error('Cannot add user', err)
        throw (err)
    }
}

async function login(userCred: UserCredentials) {
    try {
        const session = await setSessionUser(userCred)
        const loggedInUser = await getLoggedInUser()
        if (loggedInUser) {
            console.log('loggedInUser', loggedInUser);

            const user = {
                username: loggedInUser.name,
                email: loggedInUser.email,
                sessionId: session.$id,
                creatdedAt: loggedInUser.$createdAt,
                updatedAt: loggedInUser.$updatedAt
            }
            return user
        }
        return null
    } catch (err) {
        console.error('Cannot login', err)
        throw (err)
    }
}

async function logout(sessionId: string) {
    try {
        await account.deleteSession(sessionId)
    } catch (err) {
        console.error('Cannot logout', err)
        throw (err)
    }
}

function getUserInitials(username: string) {
    const res = avatars.getInitials(username, 40, 40)
    return res.href
}

async function setSessionUser(userCred: UserCredentials) {
    try {
        const sessionUser = await account.createEmailSession(userCred.email, userCred.password)
        // const JWT = await account.createJWT()
        // console.log(JWT);
        return sessionUser
    } catch (err) {
        console.error('Cannot login', err)
        throw (err)
    }
}

async function getLoggedInUser() {
    try {
        const res = await account.get()
        console.log('res', res);

        return res
    } catch (err) {
        console.error('Cannot get logged in user', err)
        throw (err)
    }
}
async function UpdaeUser(field: string, updatedValue: string, currnetPassword: string) {
    try {
        let res
        if (field === 'name') res = await account.updateName(updatedValue)
        else if (field === 'email') res = await account.updateEmail(updatedValue, currnetPassword)
        else if (field === 'password') res = await account.updatePassword(updatedValue, currnetPassword)
        console.log('res', res);
        if (res) {
            return {
                username: res.name,
                email: res.email,
                updatedAt: res.$updatedAt
            }
        }
        return null
    } catch (err) {
        console.error(`Cannot update user ${field} logged in user`, err)
        throw (err)
    }
}