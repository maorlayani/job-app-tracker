import { draftApplication, application } from "../interfaces/trakcer";
import axios, { AxiosRequestConfig } from 'axios'
import { mock } from './mock.axios.service'
import { data } from '../data/data'
import { utilService } from "./util.service";
import { saveToLocalStorge } from './localStorageService'

const STORAGE_KEY = 'application'


mock.onGet('/application').reply(function () {
    const applicationsFromStorage: string | null = localStorage.getItem(STORAGE_KEY)
    let applications: application[] = []
    if (applicationsFromStorage !== null) {
        applications = JSON.parse(applicationsFromStorage)
        if (!applications.length) applications = data
    }
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
    let applications: application[] = await getApplications()
    applications.unshift(updatedApplication)
    saveToLocalStorge(STORAGE_KEY, applications)
    return [
        200,
        { updatedApplication }
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

export const trackerService = {
    getApplications,
    addApplication,
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

async function addApplication(application: draftApplication): Promise<any> {
    try {
        const { data } = await axios.post('/application', { data: { application } })
        return data.updatedApplication
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
