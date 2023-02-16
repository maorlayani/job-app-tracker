
export enum status {
    submitted = 'Submitted',
    assignment = 'Home Assignment',
    interview = 'Scheduled Interview',
    contract = 'Contract',
    rejection = 'Rejection'
}

export interface application {
    id: string,
    company: string,
    position: string,
    positionDesc?: string,
    postedAt?: string,
    submittedAt: number,
    status: status,
    location: string,
    contact?: string,
    postedDate?: Date,
    companyDesc?: string,
    technologies?: string[]
    experience?: number,
    submittedVia: string,
    logoUrl?: string,
    isPinned: boolean // TODO: Update mock data and change the key to mandatory
}

export interface draftApplication {
    id?: string,
    company: string,
    position: string,
    positionDesc?: string,
    postedAt?: string,
    status: status,
    location: string,
    contact?: string,
    postedDate?: Date,
    companyDesc?: string,
    technologies?: string[]
    experience?: number,
    submittedVia: string,
}


export interface logo {
    type: string,
    theme: string,
    formats: { src: string }[]
}

export interface FilterBy {
    position: string[],
    location: string[],
    status: string[],
    serachInput: string
}

export interface FilterModal {
    isModalOpen: boolean,
    type: string
}