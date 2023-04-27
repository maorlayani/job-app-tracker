import { Technology } from "../../models/interfaces"

export type TechList = Technology[]


export interface AddApplicationModalProps {
    opt: string[],
    toggleTechList: (label: string) => void,
    techList: Technology[],
    setIsTechModalOpen: (isTechModalOpen: boolean) => void
}
