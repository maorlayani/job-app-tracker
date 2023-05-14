import styled from "styled-components"
import { Input } from "../styles/input.styled"
import { Register } from "../../models/interfaces"
import { FormLabel } from "./form-label"
import { ElementType } from "../../models/enums"

interface StyledTextInputProps {
    isLocation: boolean
}
const StyledTextInput = styled.div<StyledTextInputProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 1050px) {
        width: 48%;
    }
    @media (min-width: 1270px) {
        width: ${props => props.isLocation ? '31' : '48'}%;
    }
`
const Textarea = styled(Input)`
    resize: vertical;
    height: 80px;
    padding: 10px 15px 10px 10px;
    font-family: inherit;
`

export interface InputsProps {
    labelTxt: string,
    name: string,
    placeholder: string,
    register: Register,
    isRequired: boolean
}

interface FormTextInputProps extends InputsProps {
    type: ElementType,
    className?: string
}

export const FormTextInput: React.FC<FormTextInputProps> = ({ className, type, labelTxt, name, placeholder, register, isRequired, ...props }) => {
    return (
        <StyledTextInput isLocation={name === 'location'} className={className} {...props}>
            <FormLabel htmlFor={name} labelTxt={labelTxt} />
            {type === ElementType.textInput &&
                <Input {...register(name, type)} placeholder={placeholder} required={isRequired} />}
            {type === ElementType.textarea &&
                <Textarea as={type}  {...register(name, type)} placeholder={placeholder} required={isRequired}></Textarea>}
        </StyledTextInput>
    )
}

