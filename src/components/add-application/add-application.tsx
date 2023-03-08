import { useFormRegister } from '../../hooks/useFormRegister'
import { InputContainer } from "../styles/input-container.styled"
import { useNavigate, useParams } from "react-router-dom"
import { addApplication, toggleApplicationDetails, updateApplication } from "../../store/reducers/tracker-slice"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { Status } from '../../models/enums'
import { StyledButton } from '../styles/button.styled'
import { useEffect, useState } from "react"
import { trackerService } from "../../services/tracker.service"
import { AddApplicationButton, AddApplicationTitleWarpper, ContactInputContainer, ContactInputWarpper, InputsWarpper, StyledAddApplication, StyledAddApplicationForm, TechButton, TechContainer, TechModal, TechTag, TechTagContainer, TextareaWarpper } from './styled-add-application'
import { FilterButton } from '../filter/filter-button/filter-button'
import { AddApplicationModal } from '../add-application-modal/add-application-modal'
import { TechList } from '../add-application-modal/interface-add-application-modal'
import leftIcon from '../../assets/svg/add-application-title-icon.svg'
import { FlexRowCenterContainer } from '../styles/helper.styled'

export const AddApplication = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const params = useParams()
    const [isCompanyDescOpen, setIsCompanyDescOpen] = useState(false)
    const [isPositionDescOpen, setIsPositionDescOpen] = useState(false)
    const [isTechModalOpen, setIsTechModalOpen] = useState(false)
    const [techList, setTechList] = useState<TechList>([])
    const [register, setApplication, application] = useFormRegister({})

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
        console.log(application);

        // if (application._id) {
        //     dispatch(updateApplication(application))
        // } else {
        //     dispatch(addApplication(application))
        // }
        // dispatch(toggleApplicationDetails())
        // clearForm()
        // navigate('/')
    }

    const toggleDesc = (type: 'companyDesc' | 'positionDesc') => {
        if (type === 'companyDesc') {
            if (isCompanyDescOpen) setApplication((prevApp: any) => ({ ...prevApp, companyDesc: '' }))
            setIsCompanyDescOpen(!isCompanyDescOpen)
        }
        else if (type === 'positionDesc') {
            if (isPositionDescOpen) setApplication((prevApp: any) => ({ ...prevApp, positionDesc: '' }))
            setIsPositionDescOpen(!isPositionDescOpen)
        }
    }

    const clearForm = () => {
        setApplication({})
    }

    const getTechnologies = () => {
        return ['JavaScript', 'React', 'Vue', 'Angular', 'Redux', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'Jave']
    }

    const toggleTechList = (tech: string) => {
        const updateTechList = [...techList]
        const techidx = updateTechList.indexOf(tech)
        if (techidx === -1) setTechList([...updateTechList, tech])
        else {
            updateTechList.splice(techidx, 1)
            setTechList([...updateTechList])
        }
    }

    return <StyledAddApplication>
        <AddApplicationTitleWarpper>
            <h1>Create new Application</h1>
            <img src={leftIcon} alt="" />
        </AddApplicationTitleWarpper>
        <StyledAddApplicationForm onSubmit={onAddApplication}>
            <InputsWarpper>
                <InputContainer>
                    <label htmlFor="company">Company</label>
                    <input {...register('company', 'text')} placeholder='Enter company name' required />
                    <span onClick={() => toggleDesc('companyDesc')}>
                        {!isCompanyDescOpen ? '+ Add Description' : '- close'}
                    </span>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="position">Position</label>
                    <input {...register('position', 'text')} placeholder='Enter position' required />
                    <span onClick={() => toggleDesc('positionDesc')}>
                        {!isPositionDescOpen ? '+ Add Description' : '- close'}
                    </span>
                </InputContainer>
            </InputsWarpper>

            <TextareaWarpper>
                {isCompanyDescOpen && <InputContainer>
                    <label htmlFor="companyDesc">Company Description</label>
                    <textarea {...register('companyDesc', 'textarea')}></textarea>
                </InputContainer>}
                {isPositionDescOpen && <InputContainer>
                    <label htmlFor="positionDesc">Position Description</label>
                    <textarea {...register('positionDesc', 'textarea')}></textarea>
                </InputContainer>}
            </TextareaWarpper>

            <InputsWarpper>
                <InputContainer>
                    <label htmlFor="location">Location</label>
                    <input {...register('location', 'text')} placeholder='Enter location' required />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="experience">Years of experience</label>
                    <input {...register('experience', 'number')} placeholder='Enter required years of experience' />
                </InputContainer>
            </InputsWarpper>

            <TechContainer>
                <TechButton type='button' onClick={() => setIsTechModalOpen(!isTechModalOpen)}>Technologies</TechButton>
                <TechTagContainer>  {techList.map(tech => <TechTag key={tech}>{tech}</TechTag>)}</TechTagContainer>
                {isTechModalOpen && <AddApplicationModal opt={getTechnologies()} toggleTechList={toggleTechList} />}
            </TechContainer>

            <InputsWarpper>
                <ContactInputWarpper>
                    <h4>Contact</h4>
                    <ContactInputContainer>
                        <label htmlFor="contactName">Name</label>
                        <input {...register('contactName', 'text')} placeholder='Enter contact name' />
                    </ContactInputContainer>
                    <ContactInputContainer>
                        <label htmlFor="contactEmail">Email</label>
                        <input {...register('contactEmail', 'email')} placeholder='Enter contact email' />
                    </ContactInputContainer>
                    <ContactInputContainer>
                        <label htmlFor="contactPhone">Phone</label>
                        <input {...register('contactPhone', 'text')} placeholder='Enter contact phone' />
                    </ContactInputContainer>
                    <ContactInputContainer>
                        <label htmlFor="contactLinkedin">Linkedin</label>
                        <input {...register('contactLinkedin', 'text')} placeholder='Enter contact linkedin' />
                    </ContactInputContainer>
                </ContactInputWarpper>

                <InputContainer>
                    <label htmlFor="submittedVia">Submitted via</label>
                    <input {...register('submittedVia', 'text')} placeholder='Application submitted via' required />
                    <div style={{ marginBlockStart: '1em' }}></div>
                    <label htmlFor="postedDate">Posted Date</label>
                    <input {...register('postedDate', 'date')} required />
                    <div style={{ marginBlockStart: '1em' }}></div>
                    <label htmlFor="status">Status</label>
                    <select {...register('status', 'select')} required>
                        <option value="" hidden>Select Status</option>
                        <option value={Status.submitted}>Submitted</option>
                        <option value={Status.assignment}>Home Assignment</option>
                        <option value={Status.interview}>Scheduled Interview</option>
                        <option value={Status.contract}>Contract</option>
                        <option value={Status.rejection}>Rejection</option>
                    </select>
                    <div style={{ marginBlockStart: '1em' }}></div>
                    <label htmlFor="submitteAt">Applied Date</label>
                    <input {...register('submitteAt', 'date')} placeholder='Application Applied at' required />

                </InputContainer>
            </InputsWarpper>

            <InputsWarpper>
                <InputContainer>
                    <label htmlFor="resumeVersion">Upload Resume Version</label>
                    <input {...register('resumeVersion', 'file')} />
                    <span>+ Add File</span>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="positionUrl">Position URL</label>
                    <input {...register('positionUrl', 'text')} placeholder='Enter position URL' />
                </InputContainer>
            </InputsWarpper>

            <AddApplicationButton>{params.id ? 'Update' : 'Add'} Application</AddApplicationButton>
        </StyledAddApplicationForm>
        {/* <img src={rightIcon} alt="" /> */}

    </StyledAddApplication >
}