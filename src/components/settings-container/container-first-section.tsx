import styled from 'styled-components'
import { FirstSectionTitle } from './first-section-title'
import { InputsNames, SettingsInputs } from '../../pages/settings'
import { UseFormRegister } from 'react-hook-form'
import { SettingsInput } from './settings-input'

const StyledContainerFirstSection = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--primary-button);
    padding: 2rem;
    gap:.5rem;

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    @media (min-width: 800px) {
            width: 50%;
        }
`
interface ContainerFirstSectionProps {
    title: string,
    instructions: string,
    labelTxt: InputsNames,
    value: string,
    register: UseFormRegister<SettingsInputs>,
    type: string
}
export const ContainerFirstSection: React.FC<ContainerFirstSectionProps>
    = ({ title, instructions, labelTxt, value, register, type }) => {
        return (
            <StyledContainerFirstSection>
                <FirstSectionTitle title={title} instructions={instructions} />
                <InputsContainer>
                    <SettingsInput
                        labelTxt={labelTxt}
                        value={value}
                        type={type}
                        register={register} />
                    {labelTxt !== InputsNames.name &&
                        <SettingsInput
                            labelTxt={InputsNames.currentPassword}
                            value=''
                            type='password'
                            id={labelTxt + InputsNames.currentPassword}
                            register={register} />
                    }
                </InputsContainer>
            </StyledContainerFirstSection>
        )
    }