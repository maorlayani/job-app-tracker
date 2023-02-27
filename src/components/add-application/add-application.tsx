import { SideNav } from "../side-nav/side-nav"
import { useFormRegister } from '../../hooks/useFormRegister'
import { InputContainer } from "../styles/input-container.styled"
import { StyledAddApplicationForm } from "../styles/add-application-form"
import { useNavigate, useParams } from "react-router-dom"
import { addApplication, toggleApplicationDetails, updateApplication } from "../../store/reducers/tracker-slice"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { Status } from '../../models/enums'
import { StyledButton } from '../styles/button.styled'
import { useEffect } from "react"
import { trackerService } from "../../services/tracker.service"
import { InputsWarpper, StyledAddApplication } from './styled-add-application'

export const AddApplication = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const params = useParams()
    const [register, setApplication, application] = useFormRegister({
        company: '',
        companyDesc: '',
        position: '',
        positionDesc: '',
        location: '',
        experience: '',
        submittedVia: '',
        status: '',
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
            location: '',
            experience: '',
            submittedVia: '',
            status: ''
        })
    }

    return <StyledAddApplication>
        <SideNav />
        <StyledAddApplicationForm onSubmit={onAddApplication}>
            <InputsWarpper>
                <InputContainer>
                    <label htmlFor="company">Company</label>
                    <input {...register('company', 'text')} placeholder='Enter Company Name' required />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="companyDesc">Company Description</label>
                    <textarea {...register('companyDesc', 'textarea')}></textarea>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="position">Position</label>
                    <input {...register('position', 'text')} placeholder='Enter Position' required />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="positionDesc">Position Description</label>
                    <textarea {...register('positionDesc', 'textarea')}></textarea>
                </InputContainer>

                <InputContainer>
                    <label htmlFor="location">Location</label>
                    <input {...register('location', 'text')} placeholder='Enter Position Location' required />
                </InputContainer>

                <InputContainer>
                    <label htmlFor="experience">Experience required</label>
                    <input {...register('experience', 'number')} placeholder='Enter required years of experience' />
                </InputContainer>

                <InputContainer>
                    <label htmlFor="submittedVia">Submitted via</label>
                    <input {...register('submittedVia', 'text')} placeholder='Application submitted via' required />
                </InputContainer>

                <InputContainer>
                    <label htmlFor="status">Status</label>
                    <select {...register('status', 'select')} required>
                        <option value="" hidden>Select Status</option>
                        <option value={Status.submitted}>Submitted</option>
                        <option value={Status.assignment}>Home Assignment</option>
                        <option value={Status.interview}>Scheduled Interview</option>
                        <option value={Status.contract}>Contract</option>
                        <option value={Status.rejection}>Rejection</option>
                    </select>
                </InputContainer>

            </InputsWarpper>
            <StyledButton>{params.id ? 'Update' : 'Add'} Application</StyledButton>
        </StyledAddApplicationForm>
    </StyledAddApplication>
}