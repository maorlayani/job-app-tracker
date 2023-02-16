import { application, status } from '../interfaces/trakcer'
import { utilService } from '../services/util.service'

export const data: application[] = [
    {
        id: utilService.makeId(),
        company: 'Google',
        position: 'Frontend Developer',
        submittedAt: Date.now(),
        status: status.submitted,
        location: 'Tel-Aviv',
        technologies: ['Javascript', 'HTML', 'CSS'],
        experience: 5,
        submittedVia: 'Facebook',
        logoUrl: 'https://asset.brandfetch.io/id6O2oGzv-/idSuJ5ik7i.png',
        isPinned: false
    },
    {
        id: utilService.makeId(),
        company: 'Apple',
        position: 'Fullstack Developer',
        submittedAt: Date.now(),
        status: status.interview,
        location: 'Herzliya',
        technologies: ['React', 'Vue', 'Sass', 'Node.js'],
        experience: 2,
        submittedVia: 'Linkedin',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1672995446/job-application-tracker/idjRWo5z_2_a9ufp3.jpg',
        isPinned: false
    },
    {
        id: utilService.makeId(),
        company: 'Elbit',
        position: 'Embedd Developer',
        submittedAt: Date.now(),
        status: status.contract,
        location: 'Haifa',
        technologies: ['C++', 'AWS'],
        experience: 1,
        submittedVia: 'Friend',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1672996691/job-application-tracker/idXH8VPLrT_hlt8ta.jpg',
        isPinned: false
    },
    {
        id: utilService.makeId(),
        company: 'Monday',
        position: 'Backend Developer',
        submittedAt: Date.now(),
        status: status.rejection,
        location: 'Tel-Aviv',
        technologies: ['Node.js', 'Express', 'Docker'],
        experience: 5,
        submittedVia: 'Linkedin',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1672917933/job-application-tracker/idet9mV1nH_ruzwag.jpg',
        isPinned: false
    },
    {
        id: utilService.makeId(),
        company: 'ironSource',
        position: 'Java Developer',
        submittedAt: Date.now(),
        status: status.interview,
        location: 'Tel-Aviv',
        technologies: ['Java', 'OOP'],
        experience: 1,
        submittedVia: 'Company website',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1672996577/job-application-tracker/ido_Zvv_uK_a0hdw1.jpg',
        isPinned: false
    },
    {
        id: utilService.makeId(),
        company: 'Google',
        position: 'Frontend Developer',
        submittedAt: Date.now(),
        status: status.submitted,
        location: 'Tel-Aviv',
        technologies: ['Javascript', 'HTML', 'CSS'],
        experience: 5,
        submittedVia: 'Facebook',
        logoUrl: 'https://asset.brandfetch.io/id6O2oGzv-/idSuJ5ik7i.png',
        isPinned: false
    },
    {
        id: utilService.makeId(),
        company: 'Apple',
        position: 'Fullstack Developer',
        submittedAt: Date.now(),
        status: status.interview,
        location: 'Herzliya',
        technologies: ['React', 'Vue', 'Sass', 'Node.js'],
        experience: 2,
        submittedVia: 'Linkedin',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1672995446/job-application-tracker/idjRWo5z_2_a9ufp3.jpg',
        isPinned: false

    },
    {
        id: utilService.makeId(),
        company: 'Elbit',
        position: 'Embedd Developer',
        submittedAt: Date.now(),
        status: status.contract,
        location: 'Haifa',
        technologies: ['C++', 'AWS'],
        experience: 1,
        submittedVia: 'Friend',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1672996691/job-application-tracker/idXH8VPLrT_hlt8ta.jpg',
        isPinned: false
    }
]