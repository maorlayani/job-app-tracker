import { useEffect, useState } from "react"
import styled from "styled-components"
import { Technology } from "../../models/interfaces"
import { trackerService } from "../../services/tracker.service"
import { TechSearch } from "./tech-search"
import { StyledLabelTitle } from "../styles/input.styled"
import { TechTagPreview } from "./tech-tag-preview"
import { setTechnologies } from "../../store/reducers/tracker-slice"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { RootState } from "../../store/store"

const StyledTechTagList = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%;
    margin-inline-end: 10px;
`
const TechnologiesListContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    gap: 20px;  
    width: 100%;
    overflow-y: auto;
    max-height: 300px;
`

interface TechTagListProps {
    ApplicationTechnologies: Technology[],
    setTechList: (techList: Technology[]) => void

}
export const TechTagList: React.FC<TechTagListProps> = ({ ApplicationTechnologies, setTechList }) => {
    const [technologiesList, setTechnologiesList] = useState<Technology[]>([])
    const techSearch = useAppSelector((state: RootState) => state.tracker.techSearch)

    const dispatch = useAppDispatch()
    useEffect(() => {
        loadTech()
    }, [techSearch])

    const loadTech = async () => {
        try {
            const techData = await trackerService.getTechnologies(techSearch)
            if (techData) {
                dispatch(setTechnologies(techData))
                setTechnologiesList(techData)
            }
        } catch (err) {
            console.log('Cannot load technologies', err);
        }
    }
    const setApplicationTechnologies = (selectedTech: Technology) => {
        const currnetApplicationTechnologies = [...ApplicationTechnologies]
        const techIdx =
            currnetApplicationTechnologies.findIndex(tech => tech._id === selectedTech._id)
        if (techIdx !== -1) currnetApplicationTechnologies.splice(techIdx, 1)
        else currnetApplicationTechnologies.push(selectedTech)
        setTechList([...currnetApplicationTechnologies])
    }

    return (
        <StyledTechTagList>
            <StyledLabelTitle as="span">Technologies</StyledLabelTitle>
            <TechSearch />
            <TechnologiesListContainer>
                {technologiesList.map(tech =>
                    <TechTagPreview
                        key={tech._id}
                        tech={tech}
                        setApplicationTechnologies={setApplicationTechnologies} />)}
            </TechnologiesListContainer>
        </StyledTechTagList>
    )
}