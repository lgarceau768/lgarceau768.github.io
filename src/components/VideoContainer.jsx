import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import '../BB.scss'
import VideoCard from './VideoCard'

export default function VideoContainer(props) {

    return (
        <div className="videoContainer">
          <CarouselProvider
            naturalSlideHeight={597}
            naturalSlideWidth={324}
            totalSlides={10}
            step={3}
            visibleSlides={4}
            infinite={true}
            playDirection='forward'
            infinite={true}
            style={{height: "40rem"}}>
              <Slider>
                <Slide index={1}>
                  <VideoCard 
                    color="#5BA1D6" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego Music"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={2}>
                  <VideoCard 
                    color="#FFE066" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego DJ"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={3}>
                  <VideoCard 
                    color="#F25F5C" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego Lambo"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={4}>
                  <VideoCard 
                    color="#06D6A0" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego Nasa"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={5}>
                  <VideoCard 
                    color="#FFE066" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego Music"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={6}>
                  <VideoCard 
                    color="#5BA1D6" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego Music"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={7}>
                  <VideoCard 
                    color="#FFE066" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego DJ"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={8}>
                  <VideoCard 
                    color="#F25F5C" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego Lambo"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={9}>
                  <VideoCard 
                    color="#06D6A0" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego Nasa"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
                <Slide index={10}>
                  <VideoCard 
                    color="#FFE066" 
                    cardTxt="Loreum ipsum dolor sit amet, consetetur"
                    title="Lego Music"
                    url='https://www.youtube.com/watch?v=EY89lhcatYs'/>
                </Slide>
              </Slider>
              <ButtonNext className="videoNext">&#62;</ButtonNext>
              <ButtonBack className="videoBack">&#60;</ButtonBack>
            </CarouselProvider>
          </div>
    )
}