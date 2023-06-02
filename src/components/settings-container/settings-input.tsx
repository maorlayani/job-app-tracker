import styled from 'styled-components'
import { Input } from '../styles/input.styled'
import { InputsNames, SettingsInputs } from '../../pages/settings/settings'
import { UseFormRegister } from 'react-hook-form'
import { useEffect, useState } from 'react'

const StyledSettingsInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    width: 100%;
`
const StyledLabel = styled.label`
    color: #18121dd2;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 500;
    
`
const SettingsStyledInput = styled(Input)`
    border: 2px solid  #ae84d187;
    box-shadow: none;
    border-radius: 6px;
`
interface SettingsInputProps {
    labelTxt: InputsNames,
    value: string,
    register: UseFormRegister<SettingsInputs>,
    type: string,
    id?: string
}
export const SettingsInput: React.FC<SettingsInputProps> = ({ id, labelTxt, value, register, type }) => {
    const [updatedLabelValue, setUpdatedLabelValue] = useState<string>(labelTxt)
    useEffect(() => {
        isCurrPasswordInput()
    }, [labelTxt])
    const isCurrPasswordInput = () => {
        if (labelTxt === InputsNames.currentPassword) setUpdatedLabelValue(`${labelTxt} Password`)
        else if (labelTxt === InputsNames.password) setUpdatedLabelValue(`New ${labelTxt}`)
    }

    return (
        <StyledSettingsInput>
            <StyledLabel htmlFor={id || labelTxt}>
                {updatedLabelValue}
            </StyledLabel>
            <SettingsStyledInput id={id || labelTxt}
                defaultValue={value}
                placeholder={`Enter ${updatedLabelValue}`}
                type={type}
                {...register(labelTxt, { required: true, maxLength: 20 })}
            />
        </StyledSettingsInput>
    )
}