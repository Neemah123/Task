import React from 'react'
import './Testimonial.css'
import { data } from './Reviews'
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel"
import { Slide } from "./Slides"
import ArrowBackIcon from './assets/keyboardArrowLeft.svg'
import ArrowForwardIcon from './assets/keyboardArrowRight.svg'

function Testimonial() {
    const ref = React.useRef(StackedCarousel);

    return (
        <>
            <div className="learners-container">
                <div className="top">
                    <h1>From Our Loyal Customers</h1>

                </div>

                <div className="card  card-carrier">
                    <div className="carousel-wrapper">
                        <button
                            className="card-button"
                            onClick={() => ref.current?.goBack()}
                        >
                            <img src={ArrowBackIcon} />
                        </button>
                        <ResponsiveContainer
                            carouselRef={ref}
                            render={(width, carouselRef) => {
                                let currentVisibleSlide = 3;
                                if (width <= 1280) currentVisibleSlide = 3;
                                if (width <= 720) currentVisibleSlide = 1;
                                return (
                                    <StackedCarousel
                                        ref={carouselRef}
                                        slideComponent={Slide}
                                        slideWidth={400}
                                        carouselWidth={width}
                                        data={data}
                                        maxVisibleSlide={3}
                                        disableSwipe
                                        customScales={[1, 0.7, 0.2]}
                                        transitionTime={450}
                                        currentVisibleSlide={currentVisibleSlide}
                                    />
                                );
                            }}
                        />

                        <button
                            className="card-button"
                            onClick={() => ref.current?.goNext()}
                        >
                            <img src={ArrowForwardIcon} />
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Testimonial;









