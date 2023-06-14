import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const StyledHomePageSlider = styled.div`
    box-shadow: 1px 1px 3px 1px var( --secondary-text);
    border-radius: 6px;
    width: 100%;
    margin-block-end: 50px;
    @media (min-width: 900px) {
        width: 800px;
    }
`
const ImgContainer = styled.div`
    width: 100%;
    border-radius: 6px;
    @media (min-width: 900px) {
        width: 800px;
    }
`
const Img = styled.img`
    width: 100%;
    border-radius: 6px;
    @media (min-width: 900px) {
        width: 800px;
    }
`
export const HomePageSlider = () => {

    const getHomePageImages = () => {
        return [
            'https://res.cloudinary.com/dqhrqqqul/image/upload/v1686659671/job-application-tracker/tracker-page_o2tfnr.png',
            'https://res.cloudinary.com/dqhrqqqul/image/upload/c_scale,h_685/v1686659921/job-application-tracker/add-app-page_ew6nmd.png',
            'https://res.cloudinary.com/dqhrqqqul/image/upload/v1686768790/job-application-tracker/details-page_ee86qu.png',
            'https://res.cloudinary.com/dqhrqqqul/image/upload/v1686665703/job-application-tracker/archive-page_gabofr.png',
            'https://res.cloudinary.com/dqhrqqqul/image/upload/v1686768683/job-application-tracker/settings-page_dwkq05.png',
        ]
    }
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <StyledHomePageSlider>
            <Slider {...settings}>
                {getHomePageImages().map((imgUrl, idx) => {
                    return <ImgContainer key={idx}>
                        <Img src={imgUrl} alt="" />
                    </ImgContainer>
                })}
            </Slider>
        </StyledHomePageSlider>
    )
}