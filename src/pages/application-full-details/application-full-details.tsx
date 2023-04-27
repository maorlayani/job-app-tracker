import { FullDetailsContent, ContentContainer, StyledApplicationFullDetails, MainContainer, RightSideContentContainer, MapContainer, LeftSideContentContainer } from "./styled-application-full-details"
import { DetailsHeader } from "../../components/application-details/details-header/details-header"
import { DetailsTechTagContent, StyledTagContent, TagContainerCol, TagTitle } from "../../components/application-details/styled-application-details"
import { StyledTag } from "../../components/application-preview/styled-application-preview"
import { utilService } from "../../services/util.service"
import { TechLogo, TechTag, TechTagContainer } from "../../components/add-application/styled-add-application"
import { ProgressBar } from "../../components/progress-bar/progress-bar"
import { GoogleMap } from "../../components/google-map/google-map"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { trackerService } from "../../services/tracker.service"
import { Application } from "../../models/interfaces"

export const ApplicationFullDetails = () => {

    const [applicationDetails, setApplicationDetails] = useState({} as Application)
    const params = useParams()

    useEffect(() => {
        loadApplication()
        console.log(applicationDetails);

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
                <LeftSideContentContainer>

                    <TagContainerCol>
                        <TagTitle>Application status</TagTitle>
                        <StyledTag>
                            <StyledTagContent>{applicationDetails.status}</StyledTagContent>
                        </StyledTag>
                    </TagContainerCol>

                    <TagContainerCol>
                        <TagTitle>Applied Via</TagTitle>
                        <StyledTag>
                            <StyledTagContent>{applicationDetails.submittedVia}</StyledTagContent>
                        </StyledTag>
                    </TagContainerCol>

                    {applicationDetails.experience !== undefined && <TagContainerCol>
                        <TagTitle>Experience required</TagTitle>
                        <StyledTag>
                            <StyledTagContent>{utilService.checkIsPlural(applicationDetails.experience, 'year')}</StyledTagContent>
                        </StyledTag>
                    </TagContainerCol>}

                    {applicationDetails.contact && <TagContainerCol>
                        <TagTitle>Contact</TagTitle>
                        <StyledTag>
                        </StyledTag>
                        <StyledTagContent>
                            <ul style={{ paddingInlineStart: '1em' }}>
                                <li>Name: {applicationDetails.contact.name}</li>
                                <li>Email: {applicationDetails.contact.email}</li>
                                <li>Phone: {applicationDetails.contact.phone}</li>
                                <li><a href={applicationDetails.contact.linkedin} target='_blank'> Linkedin</a></li>
                            </ul>
                        </StyledTagContent>
                    </TagContainerCol>}

                </LeftSideContentContainer>

                <RightSideContentContainer>
                    <TagTitle>Location</TagTitle>
                    <StyledTag>
                        <StyledTagContent>{applicationDetails.location}</StyledTagContent>
                    </StyledTag>
                    <MapContainer>
                        <GoogleMap location={applicationDetails.location} />
                    </MapContainer>
                </RightSideContentContainer>

            </MainContainer>

            <MainContainer>
                <ContentContainer>
                    {applicationDetails.companyDesc && <TagContainerCol>
                        <TagTitle>Company Description</TagTitle>
                        <StyledTag>
                            <StyledTagContent>{applicationDetails.companyDesc}</StyledTagContent>
                        </StyledTag>
                    </TagContainerCol>}
                    {applicationDetails.positionDesc && <TagContainerCol>
                        <TagTitle>Position Description</TagTitle>
                        <StyledTag>
                            <StyledTagContent>{applicationDetails.positionDesc}</StyledTagContent>
                        </StyledTag>
                    </TagContainerCol>}
                    {applicationDetails.technologies && <TagContainerCol>
                        <TagTitle>Technologies</TagTitle>
                        <StyledTag>
                            <StyledTagContent>
                                <TechTagContainer>
                                    {applicationDetails.technologies.map(tech => <DetailsTechTagContent key={tech._id}>
                                        <TechLogo src={tech.logoUrl} />
                                        <TechTag>{tech.name}</TechTag>
                                    </DetailsTechTagContent>)}
                                </TechTagContainer>
                            </StyledTagContent>
                        </StyledTag>
                    </TagContainerCol>}
                    <TagContainerCol>
                        <TagTitle>Timeline</TagTitle>
                        <ProgressBar application={applicationDetails} />
                    </TagContainerCol>
                    {/* {applicationDetails.postedAt && <TagContainerCol>
                        <TagTitle>Position Posted at</TagTitle>
                        <StyledTag>
                            <StyledTagContent>{applicationDetails.postedAt}</StyledTagContent>
                        </StyledTag>
                    </TagContainerCol>} */}
                </ContentContainer>
            </MainContainer>

        </FullDetailsContent>
    </StyledApplicationFullDetails>
}