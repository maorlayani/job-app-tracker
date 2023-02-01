import styled from "styled-components"
import { SideNav } from "./side-nav"
import { useFormRegister } from '../hooks/useFormRegister'
import { InputContainer } from "./styles/input-container.styled"
import { StyledAddApplicationForm } from "./styles/add-application-form"

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

    const [register, setApplication, application] = useFormRegister({
        company: '',
        position: '',
        location: '',
        experience: null,
        SubmittedVia: '',
        status: ''
    })

    const onAddApplication = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        console.log(application);
        setApplication({
            company: '',
            position: '',
            location: '',
            experience: '',
            SubmittedVia: '',
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
                    <textarea name="companyDesc" id="companyDesc"></textarea>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="position">Position</label>
                    <input {...register('position', 'text')} placeholder='Enter Position' required />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="positionDesc">Position Description</label>
                    <textarea name="positionDesc" id="positionDesc"></textarea>
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
                    <label htmlFor="SubmittedVia">Submitted via</label>
                    <input {...register('SubmittedVia', 'text')} placeholder='Application submitted via' required />
                </InputContainer>

                <InputContainer>
                    <label htmlFor="status">Status</label>
                    <select {...register('status', 'select')} required>
                        <option value="submitted" hidden>Select Status</option>
                        <option value="submitted">Submitted</option>
                        <option value="assignment">Home Assignment</option>
                        <option value="interview">Scheduled Interview</option>
                        <option value="contract">Contract</option>
                        <option value="rejection">Rejection</option>
                    </select>
                </InputContainer>

            </InputsWarpper>
            <button>Add Application</button>
        </StyledAddApplicationForm>
    </StyledAddApplication>
}