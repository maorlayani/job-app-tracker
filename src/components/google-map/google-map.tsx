import React, { useEffect, useState } from "react"
import GoogleMapReact from 'google-map-react'
import styled from "styled-components"
import { trackerService } from "../../services/tracker.service"
// import { GOOGLE_MAPS_API_KEY } from "../../secret"

const MapContainer = styled.div`
    height: 230px;
   div {
        border-radius: 3px;
    }
`
interface Coordinates {
    lat: number,
    lng: number
}

interface GoogleMapProps {
    location: string
}
const CURR_GOOGLE_MAPS_API_KEY: any = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    : ''
console.log('GOOGLE_MAPS_API_KEY', CURR_GOOGLE_MAPS_API_KEY);

export const GoogleMap: React.FC<GoogleMapProps> = ({ location }) => {
    const [coordinates, setCoordinates] = useState<Coordinates>({ lat: 32.100333, lng: 34.857499 })

    useEffect(() => {
        setCoordinatesByLocation()
    }, [location])

    const setCoordinatesByLocation = async () => {
        try {
            if (!location) return
            const coor = await trackerService.getCoordinates(location)
            setCoordinates(coor)
        } catch (err) {
            console.log('err from front');
        }
    }
    const zoom: number = 15
    return (
        <MapContainer>
            {process.env.NODE_ENV === 'production' && <GoogleMapReact
                bootstrapURLKeys={{ key: CURR_GOOGLE_MAPS_API_KEY }}
                defaultCenter={{ lat: 32.100333, lng: 34.857499 }}
                center={coordinates}
                defaultZoom={zoom}>
            </GoogleMapReact>}
        </MapContainer>
    )
} 