import { draftApplication, application } from "../interfaces/trakcer";
import axios, { AxiosRequestConfig } from 'axios'
import { mock } from './mock.axios.service'
import { data } from '../data/data'
import { utilService } from "./util.service";
import { saveComanyData, saveToLocalStorge } from './localStorageService'
import { MY_BRAND_API_KEY, MY_BRAND_BASE_URL } from '../praivte'

const STORAGE_KEY = 'application'


mock.onGet('/application').reply(function () {
    const applicationsFromStorage: string | null = localStorage.getItem(STORAGE_KEY)
    let applications: application[] = []
    if (applicationsFromStorage === null) applications = data
    if (applicationsFromStorage !== null) {
        applications = JSON.parse(applicationsFromStorage)
        if (!applications.length) applications = data
    }
    saveToLocalStorge(STORAGE_KEY, applications)
    return [
        200,
        { applications }
    ]
})

mock.onGet(/\application\/\d+/).reply(async function (config: AxiosRequestConfig<any>) {
    let id: string
    if (config.url !== undefined) {
        id = config.url.replace(/\D/g, '')
    }
    let applications: application[] = await getApplications()
    const application = applications.find(app => app.id === id)
    return [
        200,
        application
    ]
})

mock.onPost('/application').reply(async function (config) {
    const { data } = JSON.parse(config.data)
    const { application } = data
    let updatedApplication: application = {
        ...application,
        id: utilService.makeId(),
        submittedAt: Date.now()
    }
    // const companyUrl = updatedApplication.company.replace(/\s/g, '')
    // await getCompanyData(`${companyUrl.toLowerCase()}.com`)
    let applications: application[] = await getApplications()
    applications.unshift(updatedApplication)
    saveToLocalStorge(STORAGE_KEY, applications)
    return [
        200,
        { updatedApplication }
    ]
})

mock.onPut('/application').reply(async function (config) {
    const { data } = JSON.parse(config.data)
    const { application } = data
    let applications: application[] = await getApplications()
    applications = applications.map(app => app.id === application.id ? application : app)
    saveToLocalStorge(STORAGE_KEY, applications)
    return [
        200,
        { application }
    ]
})

mock.onDelete('/application').reply(async function (config: AxiosRequestConfig<any>) {
    const applicationId: string = config.data
    let applications: application[] = await getApplications()
    applications = applications.filter(app => app.id !== applicationId)
    saveToLocalStorge(STORAGE_KEY, applications)
    return [
        200
    ]
})

// ------------------------------------------------------------------------------------------
export const trackerService = {
    getApplications,
    saveApplication,
    removeApplication,
    getApplicationById
}

async function getApplications() {
    try {
        const { data } = await axios.get('/application')
        return data.applications
    } catch (err: any) {
        console.error('Cannot get applications', err)
    }
}

async function saveApplication(application: application | draftApplication): Promise<any> {
    try {
        if (application.id) {
            const { data } = await axios.put('/application', { data: { application } })
            return data.application
        } else {
            const { data } = await axios.post('/application', { data: { application } })
            return data.updatedApplication
        }
    } catch (err: any) {
        console.error('Cannot add application', err)
    }
}

async function removeApplication(applicationId: string) {
    try {
        await axios.delete('/application', { data: applicationId })
    } catch (err: any) {
        console.error('Cannot remove application', err)
    }
}

async function getApplicationById(applicationId: string) {
    try {
        const { data } = await axios.get(`/application/${applicationId}`)
        return data
    } catch (err: any) {
        console.error('Cannot get application', err)
    }
}


async function getCompanyData(companyName: string) {
    try {
        console.log(companyName);
        console.log(`${MY_BRAND_BASE_URL}${companyName}`);

        const companyData = await axios.get(
            `${MY_BRAND_BASE_URL}${companyName}`, {
            headers: {
                'Authorization': `Bearer ${MY_BRAND_API_KEY}`
            }
        })
        const logos: { type: string, theme: string, formats: {}[] }[] = companyData.data.logos
        console.log(logos)
        const formats: { type: string, theme: string, formats: {}[] } | undefined = logos.find(logo => logo.type === 'icon')
        console.log(formats);

        saveComanyData(companyData.data)
    } catch (err) {
        console.log(err);

    }
}