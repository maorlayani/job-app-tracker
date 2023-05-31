import styled from 'styled-components'
import { useState } from 'react'
import { NarrowSideBar } from './narrow-side-bar'
import { SideBarContnet } from './side-bar-content'

const StyledUserSideBar = styled.div`
    position: absolute;
    top: 72px;
    height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    z-index: 10;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
`
export const UserSideBar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }
    return (
        <StyledUserSideBar>
            {isSideBarOpen && <SideBarContnet isSideBarOpen={isSideBarOpen} />}
            <NarrowSideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        </StyledUserSideBar>
    )
}