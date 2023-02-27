// import { mock } from './mock.axios.service'
import { DraftApplication, Application, Logo, FilterBy } from "../models/interfaces";
import { MY_BRAND_API_KEY, MY_BRAND_BASE_URL } from '../private'
import Axios from 'axios'

const STORAGE_KEY = 'application'

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
    getApplicationById
}

async function getApplications(filterByFromUser: FilterBy = {
    location: [],
    position: [],
    status: [],
    serachInput: ''
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
            console.log('data');
            console.log(data);
            return data
        } else {
            const { data } = await axios.post(`${BASE_URL}tracker/`, application)
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

async function getCompanyData(companyName: string) {
    try {
        const apiData = await fetch(
            `${MY_BRAND_BASE_URL}${companyName}`,
            {
                headers: {
                    'Authorization': `Bearer ${MY_BRAND_API_KEY}`
                }
            })
        const data = await apiData.json()

        const logos: Logo[] = data.logos
        const iconLogo: Logo | undefined = logos.find(logo => logo.type === 'icon')
        // console.log('formats', icon?.formats[0].src);
        return iconLogo?.formats[0].src
    } catch (err) {
        console.error(err);
    }
}