import { useAppSelector } from "../hooks/redux-hooks"
import { RootState } from "../store/store"
import { ApplicationPreview } from "./application-preview"
import styled from "styled-components"

const ApplicationListStyle = styled.section`
    padding:  2.5em ;
    overflow-y: auto;
    margin: .5em 0;
    scroll-behavior: smooth;

    /* width */
    ::-webkit-scrollbar {
    width:8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 12px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888888d6;
    border-radius: 12px;

    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555555cf;
    }
`

export const ApplicationList = () => {

    const applications = useAppSelector((state: RootState) => state.tracker.applications)

    return <ApplicationListStyle>
        <ul>
            {applications.map(app => {
                return <ApplicationPreview key={app.id} application={app} />
            })}
        </ul>
    </ApplicationListStyle>
}