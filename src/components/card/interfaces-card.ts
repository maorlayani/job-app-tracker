import { Application } from "../../models/interfaces"

export interface CardProps {
    application: Application
}

export interface StyledIconProps {
    isMarked: boolean
}

export interface StyledCardProps {
    isFlipped: boolean
}
