import { Status } from "./enums"

export interface Application {
    _id: string,
    company: string,
    position: string,
    positionDesc?: string,
    postedAt?: string,
    submittedAt: number,
    // submittedAt: number | string,
    status: Status,
    location: string,
    contact?: string,
    postedDate?: Date,
    companyDesc?: string,
    technologies?: string[]
    experience?: number,
    submittedVia: string,
    logoUrl?: string,
    isPinned: boolean
}

export interface DraftApplication {
    _id?: string,
    company: string,
    position: string,
    positionDesc?: string,
    postedAt?: string,
    status: Status,
    location: string,
    contact?: string,
    postedDate?: Date,
    companyDesc?: string,
    technologies?: string[]
    experience?: number,
    submittedVia: string,
    submittedAt?: number | string
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