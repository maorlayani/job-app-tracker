import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux-hooks'
import { RootState } from '../../store/store'
import { DetailsHeader } from '../application-details-cmps/details-header/details-header'

const StyledActivityLog = styled.div`
    position: absolute;
    height: 550px;
    width: 400px;
    background-color: #fff;
    top: 15%;
    right: 0;
    // bottom: 0
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    box-shadow: 0px 8px 12px #091E4226, 0px 0px 1px #091E424F;
    overflow: hidden;
`
const LogListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`

const LogContainer = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    width: 100%;
    padding: .5em;
`
const BulletIconOuter = styled.div<BulletProps>`
    height: 14px;
    width: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    // border: 2px solid #8c5ef36b;
    border: 2px solid  ${props => props.color}6b;
    margin-inline-end: 10px;
}
`
const BulletIconInner = styled.div<BulletProps>`
    height: 10px;
    width: 10px;
    // background-color: #8c5ef3;
    background-color: ${props => props.color};
    border-radius: 50%;
`
const LogAction = styled.span`
`
const LogDate = styled.span`
    font-weight: 600;
    margin-inline-start: 10px;
    text-decoration: underline;
`
interface BulletProps {
    color: string;
}
export const ActivityLog = () => {
    const applicationDetails = useAppSelector((state: RootState) => state.tracker.applicationDetails)
    const demoActivitis = () => {
        return [
            {
                _id: 'A101',
                action: 'Applied at',
                date: '10/05/2023',
                color: '#02a388'
            },
            {
                _id: 'A102',
                action: 'Archived at',
                date: '12/05/2023',
                color: '#FAA53D'
            },
            {
                _id: 'A103',
                action: 'Restored at',
                date: '14/05/2023',
                color: '#02a388'
            },
            {
                _id: 'A104',
                action: 'Updated status to Scheduled Interview at',
                date: '15/05/2023',
                color: '#02a388'
            },
            {
                _id: 'A105',
                action: 'Updated status to Rejected at',
                date: '16/05/2023',
                color: '#F87462'
            },
            {
                _id: 'A102',
                action: 'Archived at',
                date: '16/05/2023',
                color: '#FAA53D'
            },
            {
                _id: 'A102',
                action: 'Deleted at',
                date: '16/06/2023',
                color: '#F87462'
            }
        ]
    }
    return (
        <StyledActivityLog>
            <DetailsHeader application={applicationDetails} isFullDetails={false} />
            <LogListContainer>
                {demoActivitis().map(activity => {
                    return <LogContainer key={activity._id}>
                        <BulletIconOuter color={activity.color}>
                            <BulletIconInner color={activity.color}></BulletIconInner>
                        </BulletIconOuter>
                        <LogAction>{activity.action}</LogAction>
                        <LogDate>{activity.date}</LogDate>
                    </LogContainer>
                })}
            </LogListContainer>
        </StyledActivityLog>
    )
}