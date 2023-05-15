import { useFormRegister } from '../../hooks/useFormRegister'
import { useNavigate, useParams } from "react-router-dom"
import { addApplication, toggleApplicationDetails, updateApplication } from "../../store/reducers/tracker-slice"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { useEffect, useState } from "react"
import { trackerService } from "../../services/tracker.service"
import { AddApplicationTitleWarpper, StyledAddApplication, StyledAddApplicationForm } from './styled-add-application'
import { TechList } from '../add-application-modal/interface-add-application-modal'
import { FormSectionsBar, FormSectionTxt } from './form-sections-bar'
import styled, { keyframes } from 'styled-components'
import { FirstSection } from './first-section'
import { SecondSection } from './second-section'
import { ThirdSection } from './third-section'
import { FourthSection } from './fourth-section'
import { FormButtons } from './form-buttons'

const slideIn = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`
const SectionContainer = styled.div`
    min-height: 400px;
    width: 100%;
    animation: ${slideIn} .5s ease-out;
`
export interface ApplicationDates {
    submittedAt: any,
    postedDate: any
}
export const AddApplication = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const params = useParams()
    const [selectedSection, setSelectedSection] = useState<FormSectionTxt>(FormSectionTxt.firstSection);
    const [techList, setTechList] = useState<TechList>([])
    const [dates, setDates] = useState<ApplicationDates>({ submittedAt: '', postedDate: '' })
    const [register, setApplication, application] = useFormRegister({
        company: '',
        companyDesc: '',
        position: '',
        positionDesc: '',
        postedAt: '',
        location: '',
        experience: '',
        technologies: [],
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        contactLinkedin: '',
        submittedVia: '',
        submittedAt: '',
        status: '',
        postedDate: '',
        resumeVersion: '',
        positionUrl: ''
    })

    useEffect(() => {
        loadApplication()
    }, [params.id])

    const loadApplication = async () => {
        if (params.id) {
            const applicationToUpdate = await trackerService.getApplicationById(params.id)
            setApplication({ ...applicationToUpdate })
        } else clearForm()
    }

    const onAddApplication = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        application.technologies = [...techList]
        // const test = dates.postedDate.toLocaleDateString('en-US')

        // console.log(Date.parse(dates.postedDate));
        // console.log(Date.parse(dates.submittedAt));

        application.postedDate = Date.parse(dates.postedDate)
        application.submittedAt = Date.parse(dates.submittedAt)
        // console.log(application.submittedAt = dates.submittedAt);

        application.contact = {
            name: application.contactName,
            email: application.contactEmail,
            phone: application.contactPhone,
            linkedin: application.contactLinkedin,
        }
        delete application.contactName
        delete application.contactEmail
        delete application.contactPhone
        delete application.contactLinkedin
        console.log(application);

        if (application._id) {
            dispatch(updateApplication(application))
        } else {
            dispatch(addApplication(application))
        }
        dispatch(toggleApplicationDetails())
        clearForm()
        navigate('/')
    }

    const clearForm = () => {
        setApplication({
            company: '',
            companyDesc: '',
            position: '',
            positionDesc: '',
            postedAt: '',
            location: '',
            experience: '0',
            technologies: [],
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            contactLinkedin: '',
            submittedVia: '',
            submittedAt: '',
            status: '',
            postedDate: '',
            resumeVersion: '',
            positionUrl: ''
        })
        setTechList([])
    }

    return <StyledAddApplication>
        <FormSectionsBar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        <StyledAddApplicationForm onSubmit={onAddApplication}>

            {selectedSection === FormSectionTxt.firstSection && <SectionContainer>
                <FirstSection
                    register={register}
                    exp={application.experience} />
            </SectionContainer>}

            {selectedSection === FormSectionTxt.secondSection && <SectionContainer>
                <SecondSection
                    register={register}
                    ApplicationTechnologies={techList}
                    setTechList={setTechList} />
            </SectionContainer>}

            {selectedSection === FormSectionTxt.thirdSection && <SectionContainer>
                <ThirdSection setDates={setDates} dates={dates} />
            </SectionContainer>}

            {selectedSection === FormSectionTxt.fourthSection && <SectionContainer>
                <FourthSection register={register} />
            </SectionContainer>}
            <FormButtons clearForm={clearForm} />
        </StyledAddApplicationForm>

    </StyledAddApplication >
}