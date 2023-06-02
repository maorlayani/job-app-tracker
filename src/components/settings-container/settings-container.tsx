import styled from 'styled-components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { StyledButton } from '../styles/buttons.styled'
import { InputsNames, SettingsInputs } from '../../pages/settings/settings'
import { ContainerFirstSection } from './container-first-section'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { updateUser } from '../../store/reducers/user-slice'

const StyledSettingsContainer = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid  #ae84d1;
`
const SecondSection = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 2rem;
    height: 100%;
`
const UpdateSettingButton = styled(StyledButton)`
    width: 130px;
`
interface SettingsContainerProps {
    title: string,
    labelTxt: InputsNames,
    value: string,
    type: string,
    instructions: string
}


export const SettingsContainer: React.FC<SettingsContainerProps> = ({ title, labelTxt, value, type, instructions }) => {
    const { register, handleSubmit } = useForm<SettingsInputs>()
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<SettingsInputs> = async (data) => {
        console.log('data', data);
        const currentPassword = data.currnet ? data.currnet : ''
        dispatch(updateUser({
            field: labelTxt,
            updatedValue: data[labelTxt],
            currnetPassword: currentPassword
        }))
    }

    return (
        <StyledSettingsContainer onSubmit={handleSubmit(onSubmit)}>
            <ContainerFirstSection
                title={title}
                instructions={instructions}
                labelTxt={labelTxt}
                value={value}
                type={type}
                register={register}
            />
            <SecondSection>
                <UpdateSettingButton>Update</UpdateSettingButton>
            </SecondSection>
        </StyledSettingsContainer>
    )
}