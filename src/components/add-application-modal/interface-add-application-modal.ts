export type TechList = string[]


export interface AddApplicationModalProps {
    opt: string[],
    toggleTechList: (tech: string) => void
}
