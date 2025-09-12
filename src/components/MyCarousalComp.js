import react from 'react';
import Carousel from 'react-bootstrap/Carousel';
import myCommanData from '../shared/constant/constantData'

const MyCarousalComp = () => {

    return <>
        {/* <h1>this is my MyCarousalComp.</h1> */}
        <Carousel>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <img src={myCommanData.samosa} alt='samosa' style={{width:"100%",height:"400px"}} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <img src={myCommanData.poha} alt='poha' style={{width:"100%",height:"400px"}} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img src={myCommanData.vadapav} alt='vadapav' style={{width:"100%",height:"400px"}} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
}

export default MyCarousalComp;