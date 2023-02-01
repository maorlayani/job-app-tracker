import { draftApplication, application } from "../interfaces/trakcer";
import axios from 'axios'
import { mock } from './mock.axios.service'
import { data } from '../data/data'
import { utilService } from "./util.service";

mock.onGet('/application').reply(200, data)


mock.onPost('/application').reply(function (config) {
    const { data } = JSON.parse(config.data)
    const { application } = data
    let updatedApplication: application = {
        ...application,
        id: utilService.makeId(),
        submittedAt: Date.now()
    }
    return [
        200,
        { updatedApplication }
    ]
})

export const trackerService = {
    getApplications,
    addApplication,
}

async function getApplications() {
    try {
        const { data } = await axios.get('/application')
        return data
    } catch (err) {
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