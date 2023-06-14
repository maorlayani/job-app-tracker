import React, { useEffect, useState } from "react"
import GoogleMapReact from 'google-map-react'
import styled from "styled-components"
import { trackerService } from "../../services/tracker.service"

const MapContainer = styled.div`
    height: 300px;
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
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY ? process.env.GOOGLE_MAPS_API_KEY : '' }}
                defaultCenter={{ lat: 32.100333, lng: 34.857499 }}
                center={coordinates}
                defaultZoom={zoom}>
            </GoogleMapReact>
        </MapContainer>
    )
} 