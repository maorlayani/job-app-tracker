import styled from "styled-components"
import { SideNav } from "./side-nav"
import { useFormRegister } from '../hooks/useFormRegister'
import { InputContainer } from "./styles/input-container.styled"
import { StyledAddApplicationForm } from "./styles/add-application-form"
import { useNavigate, useParams } from "react-router-dom"
import { addApplication, updateApplication } from "../store/reducers/tracker-slice"
import { useAppDispatch } from "../hooks/redux-hooks"
import { status } from '../interfaces/trakcer'
import { StyledButton } from './styles/button.styled'
import { useEffect } from "react"
import { trackerService } from "../services/tracker.service"

const StyledAddApplication = styled.div`
    display: flex;
    height: 100vh;
`

const InputsWarpper = styled.div`
   max-width: 850px;
    display: flex;
    justify-content:space-around;
    gap: 10px;
    flex-wrap: wrap;
    margin-block-end: 25px;
`
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
        if (application.id) {
            dispatch(updateApplication(application))
        } else {
            dispatch(addApplication(application))
        }
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
                        <option value={status.submitted}>Submitted</option>
                        <option value={status.assignment}>Home Assignment</option>
                        <option value={status.interview}>Scheduled Interview</option>
                        <option value={status.contract}>Contract</option>
                        <option value={status.rejection}>Rejection</option>
                    </select>
                </InputContainer>

            </InputsWarpper>
            <StyledButton>{params.id ? 'Update' : 'Add'} Application</StyledButton>
        </StyledAddApplicationForm>
    </StyledAddApplication>
}