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

export const userService = {
    signup,
    login,
    logout,
    getUserInitials,
    UpdateUser,
    getLoggedInUser
}

async function signup(userCred: User) {
    try {
        const res = await account.create(ID.unique(), userCred.email, userCred.password, userCred.username)
        if (res.status) {
            const session = await setUserSession({ email: userCred.email, password: userCred.password })
            const userJWT = await account.createJWT()
            const user = {
                id: res.$id,
                username: res.name,
                email: res.email,
                sessionId: session.$id,
                creatdedAt: res.$createdAt,
                updatedAt: res.$updatedAt,
                JWT: userJWT.jwt
            }
            return user
        }
        return null
    } catch (err) {
        console.error('Cannot create user', err)
        throw (err)
    }
}

async function login(userCred: UserCredentials) {
    try {
        const session = await setUserSession(userCred)
        const loggedInUser = await getLoggedInUser()
        if (loggedInUser) {
            const userJWT = await account.createJWT()
            const user = {
                id: loggedInUser.$id,
                username: loggedInUser.name,
                email: loggedInUser.email,
                sessionId: session.$id,
                creatdedAt: loggedInUser.$createdAt,
                updatedAt: loggedInUser.$updatedAt,
                JWT: userJWT.jwt
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
async function setUserSession(userCred: UserCredentials) {
    try {
        const userSession = await account.createEmailSession(userCred.email, userCred.password)
        return userSession
    } catch (err) {
        throw (err)
    }
}

async function getLoggedInUser() {
    try {
        const user = await account.get()
        return user
    } catch (err) {
        console.error('Cannot get logged in user', err)
        throw (err)
    }
}
async function UpdateUser(field: string, updatedValue: string, currnetPassword: string) {
    try {
        let res
        switch (field) {
            case 'name':
                res = await account.updateName(updatedValue)
                break;
            case 'email':
                res = await account.updateEmail(updatedValue, currnetPassword)
                break;
            case 'password':
                res = await account.updatePassword(updatedValue, currnetPassword)
                break;
            default:
                break;
        }
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
function getUserInitials(username: string) {
    const res = avatars.getInitials(username, 40, 40)
    return res.href
}
