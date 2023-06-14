import { DetailsHeader } from "../components/application-details-cmps/details-header/details-header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { trackerService } from "../services/tracker.service"
import { Application } from "../models/interfaces"
import { LeftSideContent } from "../components/application-details-cmps/left-side-content"
import { BottomContent } from "../components/application-details-cmps/bottom-content"
import { RightSideContent } from "../components/application-details-cmps/right-side-content"
import styled, { keyframes } from "styled-components"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { RootState } from "../store/store"
import { updateApplication } from "../store/reducers/tracker-slice"

const StyledApplicationFullDetails = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
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
    // height: fit-content;
    border-radius: 12px;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    animation: ${grow} .8s forwards;
    transform-origin: 50% 50%;
    overflow-x: hidden;
`
export const MainContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;

    margin-block-end: 2em;
    @media (min-width: 650px) {
        flex-direction: row;
    }
`

export const ApplicationFullDetails = () => {

    const [applicationDetails, setApplicationDetails] = useState({} as Application)
    const params = useParams()
    const dispatch = useAppDispatch()
    const user = useAppSelector((state: RootState) => state.user.user)

    useEffect(() => {
        loadApplication()
    }, [params.applicationId])

    const loadApplication = async () => {
        if (params.applicationId) {
            const application = await trackerService.getApplicationById(params.applicationId)
            setApplicationDetails(application)
        }
    }
    const onUpdateApplication = async (applicationToUpdate: Application) => {
        const updatedApplication = await dispatch(updateApplication({ application: applicationToUpdate, JWT: user?.JWT }))
        setApplicationDetails(updatedApplication.payload)
    }

    return <StyledApplicationFullDetails>
        <FullDetailsContent>
            <DetailsHeader application={applicationDetails} isFullDetails={true} />
            <MainContainer>
                <LeftSideContent application={applicationDetails} onUpdateApplication={onUpdateApplication} />
                <RightSideContent application={applicationDetails} onUpdateApplication={onUpdateApplication} />
            </MainContainer>
            <BottomContent application={applicationDetails} onUpdateApplication={onUpdateApplication} />
        </FullDetailsContent>
    </StyledApplicationFullDetails>
}