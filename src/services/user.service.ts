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
    getUserInitials
}

async function signup(userCred: User) {
    try {
        const res = await account.create(ID.unique(), userCred.email, userCred.password, userCred.username)
        console.log('res SIGNUP:', res);
        if (res.status) {
            const session = await setSessionUser({ email: userCred.email, password: userCred.password })
            return { username: res.name, email: res.name, sessionId: session.$id }
        }
        return null
    } catch (err) {
        console.error('Cannot add user', err)
        throw (err)
    }
}

async function login(userCred: UserCredentials) {
    try {
        console.log('userCred', userCred);

        const session = await setSessionUser(userCred)
        console.log('session', session);

        const loggedInUser = await getLoggedInUser()
        console.log(loggedInUser);

        if (loggedInUser) {
            const user = {
                username: loggedInUser?.name,
                email: loggedInUser?.email,
                sessionId: session.$id
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

function getUserInitials() {
    const res = avatars.getInitials(undefined, 40, 40)
    return res.href
}

async function setSessionUser(userCred: UserCredentials) {
    try {
        console.log('userCred from session', userCred);

        const sessionUser = await account.createEmailSession(userCred.email, userCred.password)
        // const JWT = await account.createJWT()
        // console.log(JWT);
        console.log('sessionUser', sessionUser);

        return sessionUser
    } catch (err) {
        console.error('Cannot login', err)
        throw (err)
    }
}

async function getLoggedInUser() {
    try {
        const res = await account.get()
        return res
    } catch (err) {

    }
}