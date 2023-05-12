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
    contact?: { name?: string, email?: string, phone?: string, linkedin?: string },
    submittedVia: string,
    submittedAt: number,
    status: Status,
    postedDate?: number,
    positionUrl?: string,
    logoUrl?: string,
    links?: [{ name: string, url: string }],
    isPinned: boolean
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
    contact?: { name?: string, email?: string, phone?: string, linkedin?: string },
    submittedVia: string,
    submittedAt?: string | number
    status: Status,
    postedDate?: string | number,
    positionUrl?: string
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
