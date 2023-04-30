import { DraftApplication, Application, Logo, FilterBy, Technology } from "../models/interfaces";
import { GOOGLE_MAPS_API_KEY, MY_BRAND_API_KEY, MY_BRAND_BASE_URL } from '../secret'
import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
})

// mock.onPost('/application').reply(async function (config) {
//     const { data } = JSON.parse(config.data)
//     const { application } = data
//     let updatedApplication: Application = {
//         ...application,
//         id: utilService.makeId(),
//         submittedAt: Date.now(),
//         isPinned: false
//     }
//     const companyUrl = updatedApplication.company.replace(/\s/g, '')
//     const iconUrl = await getCompanyData(`${companyUrl.toLowerCase()}.com`)
//     updatedApplication.logoUrl = iconUrl ? iconUrl : 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1677083107/job-application-tracker/na-icon_ngcgpa.png'
//     let applications: Application[] = await getApplications()
//     applications.unshift(updatedApplication)
//     saveToLocalStorge(STORAGE_KEY, applications)
//     return [
//         200,
//         { updatedApplication }
//     ]
// })


// ------------------------------------------------------------------------------------------
export const trackerService = {
    getApplications,
    saveApplication,
    removeApplication,
    getApplicationById,
    getTechnologies,
    getCoordinates
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
            // console.log('data');
            // console.log(data);
            return data
        } else {
            // console.log('from server');
            const applicationToSave = { ...application }
            if (applicationToSave.postedDate) {
                const formatPostedAt = new Date(applicationToSave.postedDate)
                applicationToSave.postedDate = formatPostedAt.getTime()
            }
            if (applicationToSave.submittedAt) {
                const formatSubmittedAt = new Date(applicationToSave.submittedAt)
                applicationToSave.submittedAt = formatSubmittedAt.getTime()
            }
            // console.log(applicationToSave);

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

async function getTechnologies(): Promise<Technology[]> {
    try {
        const { data } = await axios.get(`${BASE_URL}technology/`)
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
        // console.log(data);
        // console.log(data.data.results[0].geometry.location);
        const coor = data.data.results[0].geometry.location
        return coor

    } catch (err) {
        console.error('Cannot get coordinates', err);
    }
}