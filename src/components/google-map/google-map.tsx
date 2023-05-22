import React, { useEffect, useState } from "react"
import GoogleMapReact from 'google-map-react'
import styled from "styled-components"
import { GOOGLE_MAPS_API_KEY } from "../../secret"
// import { trackerService } from "../../services/tracker.service"
import { Coordinates, GoogleMapProps } from "./interfaces-google-map"

const MapContainer = styled.div`
    height: 230px;
   div {
        border-radius: 3px;
    }
`

// const BranchLocation = ({ lat, lng, text, onClick }) => <div
//     style={{ fontSize: '16px' }} onClick={() => onClick(lat, lng)}>{text}</div>

export const GoogleMap: React.FC<GoogleMapProps> = ({ location }) => {
    // export function GoogleMap({ location }) {
    const [coordinates, setCoordinates] = useState<Coordinates | undefined>(undefined)

    useEffect(() => {
        // if (!coordinates) setCoordinatesByLocation()
        if (!coordinates) setCoordinates({ lat: 32.100333, lng: 34.857499 })
    }, [])

    // const setCoordinatesByLocation = async () => {
    //     try {
    //         const coor = await trackerService.getCoordinates(location)
    //         console.log('coor', coor);
    //         setCoordinates(coor)
    //     } catch (err) {
    //         console.log('err from front');
    //     }
    // }


    const zoom: number = 15

    // const handleMarkerClick = (lat, lng) => {
    //     setCoordinates({ lat, lng })
    // }

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
                defaultCenter={{ lat: 32.100333, lng: 34.857499 }}
                center={coordinates}
                defaultZoom={zoom}>
            </GoogleMapReact>
        </MapContainer>
    )
} 