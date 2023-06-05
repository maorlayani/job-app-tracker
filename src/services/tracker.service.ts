import { DraftApplication, Application, Logo, FilterBy, Technology } from "../models/interfaces";
import Axios from 'axios'
import { ElementType } from "../models/enums";
import { FormSectionTxt } from "../components/add-application/form-sections-bar";

const BASE_URL = process.env.NODE_ENV === 'production'
    // ? '/api/'
    ? 'https://job-app-tracker-backend.vercel.app/api/'
    : '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
})
export const trackerService = {
    getApplications,
    saveApplication,
    removeApplication,
    getApplicationById,
    getTechnologies,
    getCoordinates,
    getFirstSectionInputsData,
    getContactInfoInputsData,
    getFormBarSections
}

async function getApplications(filterByFromUser: FilterBy = {
    location: [],
    position: [],
    status: [],
    searchInput: ''
}): Promise<Application[]> {
    try {
        const filterBy = { filterBy: JSON.stringify(filterByFromUser) }
        const { data } = await axios.get(`${BASE_URL}tracker/`, { params: filterBy })
        const applications: Application[] = data
        return applications
    } catch (err: any) {
        console.error('Cannot get applications', err)
        throw (err)
    }
}

async function saveApplication(application: Application | DraftApplication): Promise<any> {
    try {
        if (application._id) {
            const { data } = await axios.put(`${BASE_URL}tracker/${application._id}`, application)
            return data
        } else {
            const applicationToSave = { ...application }
            // if (applicationToSave.postedDate) {
            //     const formatPostedAt = new Date(applicationToSave.postedDate)
            //     applicationToSave.postedDate = formatPostedAt.getTime()
            // }
            // if (applicationToSave.submittedAt) {
            //     const formatSubmittedAt = new Date(applicationToSave.submittedAt)
            //     applicationToSave.submittedAt = formatSubmittedAt.getTime()                
            // }
            const { data } = await axios.post(`${BASE_URL}tracker/`, applicationToSave)
            return data
        }
    } catch (err: any) {
        console.error('Cannot add application', err)
    }
}

async function removeApplication(applicationId: string) {
    try {
        await axios.delete(`${BASE_URL}tracker/${applicationId}`)
    } catch (err: any) {
        console.error('Cannot remove application', err)
    }
}

async function getApplicationById(applicationId: string) {
    try {
        const { data } = await axios.get(`${BASE_URL}tracker/${applicationId}`)
        return data
    } catch (err: any) {
        console.error('Cannot get application', err)
    }
}

async function getTechnologies(techSerachFromUser: string): Promise<Technology[]> {
    try {
        const techSerach = { techSerach: techSerachFromUser }
        const { data } = await axios.get(`${BASE_URL}technology/`, { params: techSerach })
        const technologies: Technology[] = data
        return technologies
    } catch (err: any) {
        console.error('Cannot get technologies', err)
        throw (err)
    }
}

async function getCoordinates(location: string) {
    try {
        const data: any = await axios.get(`${BASE_URL}tracker/location/${location}`)
        const coor = data.data.results[0].geometry.location
        return coor
    } catch (err) {
        console.error('Cannot get coordinates', err);
    }
}

function getFirstSectionInputsData() {
    return [
        {
            type: ElementType.textInput,
            labelTxt: 'Company',
            name: 'company',
            placeholder: 'Enter company name',
            isRequired: true
        },
        {
            type: ElementType.textInput,
            labelTxt: 'Position',
            name: 'position',
            placeholder: 'Enter position',
            isRequired: true
        },
        {
            type: ElementType.textarea,
            labelTxt: 'Company Description',
            name: 'companyDesc',
            placeholder: 'Add description',
            isRequired: false
        },
        {
            type: ElementType.textarea,
            labelTxt: 'Position Description',
            name: 'positionDesc',
            placeholder: 'Add description',
            isRequired: false
        },
        {
            type: ElementType.textInput,
            labelTxt: 'Location',
            name: 'location',
            placeholder: 'Enter location',
            isRequired: true
        },
        {
            type: ElementType.rangeInput,
            labelTxt: 'Years of experience',
            name: 'experience',
            placeholder: '',
            isRequired: true
        }
    ]
}

function getContactInfoInputsData() {
    return [
        {
            type: ElementType.textInput,
            labelTxt: 'Name',
            name: 'contactName',
            placeholder: 'Enter contact name',
            isRequired: false
        },
        {
            type: ElementType.textInput,
            labelTxt: 'Email',
            name: 'contactEmail',
            placeholder: 'Enter email',
            isRequired: false
        },
        {
            type: ElementType.textInput,
            labelTxt: 'Phone',
            name: 'contactPhone',
            placeholder: 'Enter contact phone',
            isRequired: false
        },
        {
            type: ElementType.textInput,
            labelTxt: 'Linkedin',
            name: 'contactLinkedin',
            placeholder: 'Enter contact linkedin link',
            isRequired: false
        }
    ]
}

function getFormBarSections() {
    return [
        {
            idx: "I",
            type: FormSectionTxt.firstSection
        },
        {
            idx: "II",
            type: FormSectionTxt.secondSection
        },
        {
            idx: "III",
            type: FormSectionTxt.thirdSection
        },
        {
            idx: "IIII",
            type: FormSectionTxt.fourthSection
        }
    ]
}