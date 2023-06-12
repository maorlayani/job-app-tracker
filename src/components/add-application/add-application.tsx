import { useFormRegister } from '../../hooks/useFormRegister'
import { useNavigate, useParams } from "react-router-dom"
import { addApplication, toggleApplicationDetails, updateApplication } from "../../store/reducers/tracker-slice"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { useEffect, useState } from "react"
import { trackerService } from "../../services/tracker.service"
import { StyledAddApplication, StyledAddApplicationForm } from './styled-add-application'
import { FormSectionsBar, FormSectionTxt } from './form-sections-bar'
import styled, { keyframes } from 'styled-components'
import { FirstSection } from './first-section'
import { SecondSection } from './second-section'
import { ThirdSection } from './third-section'
import { FourthSection } from './fourth-section'
import { FormButtons } from './form-buttons'
import { Technology } from '../../models/interfaces'
import { RootState } from '../../store/store'
import { UserSideBar } from '../user-side-bar/user-side-bar'

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
export type TechList = Technology[]

export interface ApplicationDates {
    submittedAt: any,
    postedDate: any
}
export const AddApplication = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const params = useParams()
    const user = useAppSelector((state: RootState) => state.user.user)

    const [selectedSection, setSelectedSection] = useState<FormSectionTxt>(FormSectionTxt.firstSection);
    const [page, setPage] = useState<number>(0)

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
        application.postedDate = Date.parse(dates.postedDate)
        application.submittedAt = Date.parse(dates.submittedAt)
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
            dispatch(updateApplication({ application, JWT: user?.JWT }))
        } else {
            dispatch(addApplication({ application, JWT: user?.JWT }))
        }
        dispatch(toggleApplicationDetails())
        clearForm()
        navigate('/tracker')
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
    const setSection = (setNewPage: number, isAbsolutePage?: boolean) => {
        let newPage = isAbsolutePage ? setNewPage : page + setNewPage
        const FormSection = Object.values(FormSectionTxt)
        if (newPage > FormSection.length - 1) return
        setPage(newPage)
        setSelectedSection(FormSection[newPage])
    }
    return <>
        <UserSideBar />
        <StyledAddApplication>

            <FormSectionsBar selectedSection={selectedSection} setSection={setSection} />
            <StyledAddApplicationForm onSubmit={onAddApplication}>

                {selectedSection === FormSectionTxt.firstSection && <SectionContainer>
                    <FirstSection
                        register={register}
                        exp={application.experience} />
                </SectionContainer>}

                {selectedSection === FormSectionTxt.secondSection && <SectionContainer>
                    <SecondSection
                        ApplicationTechnologies={techList}
                        setTechList={setTechList} />
                </SectionContainer>}

                {selectedSection === FormSectionTxt.thirdSection && <SectionContainer>
                    <ThirdSection setDates={setDates} dates={dates} />
                </SectionContainer>}

                {selectedSection === FormSectionTxt.fourthSection && <SectionContainer>
                    <FourthSection register={register} />
                </SectionContainer>}
                <FormButtons clearForm={clearForm} selectedSection={selectedSection} setSection={setSection} page={page} />
            </StyledAddApplicationForm>

        </StyledAddApplication >
    </>
}