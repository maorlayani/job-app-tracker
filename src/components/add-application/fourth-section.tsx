import styled from "styled-components"
import { ElementType } from "../../models/enums"
import { Register } from "../../models/interfaces"
import { DragDropFile } from "../inputs/form-file-input"
import { FormTextInput } from "../inputs/form-text-input"
import { ContactInfo } from "./cantact-info"
const InputsWarpper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-block-end: 15px;
    flex-wrap: wrap;
`
export type SetApplication = React.Dispatch<React.SetStateAction<any>>;

export interface FourthSectionProps {
    register: Register,
    setApplication: SetApplication,
    application: any
}
export const FourthSection: React.FC<FourthSectionProps> = ({ register, setApplication, application }) => {
    return (
        <>
            <InputsWarpper>
                <FormTextInput
                    type={ElementType.textInput}
                    labelTxt={'Applied via'}
                    name={'submittedVia'}
                    placeholder={'Application applied via'}
                    register={register}
                    isRequired={false} />
                <FormTextInput
                    type={ElementType.textInput}
                    labelTxt={'Position URL'}
                    name={'positionUrl'}
                    placeholder={'Enter position URL'}
                    register={register}
                    isRequired={false} />
            </InputsWarpper>
            <ContactInfo register={register} />
            <DragDropFile application={application} setApplication={setApplication} />
        </>
    )
}