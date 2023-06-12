import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const StyledHomePageSlider = styled.div`
    box-shadow: 1px 1px 3px 1px #cfcfcf;
    border-radius: 6px;
    width: 100%;
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
            'https://res.cloudinary.com/dqhrqqqul/image/upload/v1684241773/job-application-tracker/tracker-board_yp1diq.png',
            'https://res.cloudinary.com/dqhrqqqul/image/upload/v1684241770/job-application-tracker/application-details_kcznfh.png',
            'https://res.cloudinary.com/dqhrqqqul/image/upload/v1684241777/job-application-tracker/add-application-form_qfv6dl.png'
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