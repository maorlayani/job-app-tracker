import styled from 'styled-components'
import { ApplicationKeys } from '../../models/enums'
import { Application } from '../../models/interfaces'
import { GoogleMap } from '../google-map/google-map'
import { DetailsTag } from './details-tag'

const StyledDetailsMap = styled.div`

`
const MapContainer = styled.div`
    height: 230px;
`
interface DetailsMapProps {
    application: Application,
    onUpdateApplication: (applicationToUpdate: Application) => void
}
export const DetailsMap: React.FC<DetailsMapProps> = ({ onUpdateApplication, application }) => {
    return (
        <StyledDetailsMap>
            <DetailsTag title='Location'
                application={application}
                content={application.location}
                name={ApplicationKeys.location}
                onUpdateApplication={onUpdateApplication} />
            <MapContainer>
                <GoogleMap location={application.location} />
            </MapContainer>
        </StyledDetailsMap>
    )
}