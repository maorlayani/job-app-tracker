import { FunctionComponent } from "react"
import { Status } from "./enums"

export interface Application {
    _id: string,
    company: string,
    companyDesc?: string,
    position: string,
    positionDesc?: string,
    postedAt?: string,
    location: string,
    experience?: number,
    technologies?: Technology[]
    contact?: Contact,
    submittedVia: string,
    submittedAt: number,
    status: Status,
    postedDate?: number,
    positionUrl?: string,
    logoUrl: string,
    links?: [{ name: string, url: string }],
    isPinned: boolean,
    isArchived: boolean,
    archivedDate: number | '',
    resume?: { id: string, name: string }
}

export interface DraftApplication {
    _id?: string,
    company: string,
    companyDesc?: string,
    position: string,
    positionDesc?: string,
    postedAt?: string,
    location: string,
    experience?: number,
    technologies?: string[]
    contact?: Contact,
    submittedVia: string,
    submittedAt?: string | number
    status: Status,
    postedDate?: string | number,
    positionUrl?: string,
    resume?: { id: string, name: string }
}

export interface Logo {
    type: string,
    theme: string,
    formats: { src: string }[]
}

export interface FilterBy {
    position: string[],
    location: string[],
    status: string[],
    searchInput: string
}

export interface FilterModal {
    isModalOpen: boolean,
    type: string
}

export interface Technology {
    _id: string,
    name: string,
    logoUrl: string
}

export interface Register {
    (field: string, type: string): any
}

export interface Contact {
    name?: string,
    linkedin?: string,
    email?: string,
    phone?: string,
}

export interface UserCredentials {
    email: string,
    password: string
}

export interface MinUser {
    id: string,
    username: string,
    email: string,
    sessionId: string,
    creatdedAt: string,
    updatedAt: string,
    JWT: string
}

export interface User extends UserCredentials {
    username: string
}