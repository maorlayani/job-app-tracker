import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Application } from '../models/interfaces'

dayjs.extend(relativeTime)

function makeId(length: number = 4): string {
    let txt: string = ''
    const possible: string = '0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

const getTimeFromNow = (date: number | string) => {
    if (typeof date !== 'number') return 'Not Found'
    // const FormattedDate = dayjs(date).format('DD/MM/YYYY')
    // console.log('FormattedDate:', FormattedDate);
    return dayjs(date).fromNow()
}
const fromatDateToNumber = (formatDate: string): number => {
    const [day, month, year] = formatDate.split('/')
    const dateObject = new Date(`${month}/${day}/${year}`)
    return dateObject.getTime()
}
const checkIsPlural = (num: number, noun: string) => {
    if (num <= 1) return `${num} ${noun}`
    return `${num} ${noun}s`
}

const removeDuplicates = (array: Application[], key: 'location' | 'position') => {
    let typeOpt = array.map(app => app[key])
    typeOpt = typeOpt.filter((val, idx, arr) => arr.indexOf(val) === idx)
    return typeOpt
}


export const utilService = {
    makeId,
    getTimeFromNow,
    checkIsPlural,
    removeDuplicates,
    fromatDateToNumber
}