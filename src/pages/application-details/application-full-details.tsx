import { DetailsHeader } from "../../components/application-details-cmps/details-header/details-header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { trackerService } from "../../services/tracker.service"
import { Application } from "../../models/interfaces"
import { LeftSideContent } from "../../components/application-details-cmps/left-side-content"
import { BottomContent } from "../../components/application-details-cmps/bottom-content"
import { RightSideContent } from "../../components/application-details-cmps/right-side-content"
import styled, { keyframes } from "styled-components"

const StyledApplicationFullDetails = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #00000099;
    display: flex;
    justify-content: center;
    overflow-y: auto;
`
const grow = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`
const FullDetailsContent = styled.div`
    background-color: #fff;
    width: 950px;
    border-radius: 12px;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    animation: ${grow} .8s forwards;
    transform-origin: 50% 50%;
`
export const MainContainer = styled.div`
    display: flex;
    width: 90%;
    margin-block-end: 2em;
`

export const ApplicationFullDetails = () => {

    const [applicationDetails, setApplicationDetails] = useState({} as Application)
    const params = useParams()

    useEffect(() => {
        loadApplication()
    }, [params.applicationId])

    const loadApplication = async () => {
        if (params.applicationId) {
            const application = await trackerService.getApplicationById(params.applicationId)
            setApplicationDetails(application)
        }
    }

    return <StyledApplicationFullDetails>
        <FullDetailsContent>
            <DetailsHeader application={applicationDetails} isFullDetails={true} />
            <MainContainer>
                <LeftSideContent application={applicationDetails} />
                <RightSideContent application={applicationDetails} />
            </MainContainer>
            <BottomContent application={applicationDetails} />
        </FullDetailsContent>
    </StyledApplicationFullDetails>
}