import React, { useState ,useRef, useEffect } from 'react';
import './List.css';
import axios from '../../utils/axios';
import { useViewport } from '../../utils/useViewport'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import "swiper/css/effect-flip";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const List = ({ title, fetchURL, isLargeRow = false, setShowModal, setMovieTitle, setMovieOverview, setMovieImg}) => {
    const [windowDimensions] = useViewport()
    const { width } = windowDimensions
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchURL);
          setMovies(request.data.results)
          return request;
        };
    
        fetchData()
      }, [fetchURL]);

    const listRef = useRef();
    let srcimg = 'https://image.tmdb.org/t/p/original/'
    return(
        <div className='list'>
            <h1 className='listTitle'>{title}</h1>
            <Swiper 
            className='wrapper'
            pagination={{clickable: true}}
            navigation={true}
            grabCursor={false}
            draggable={false}
            slidesPerView={5}
            loopAdditionalSlides={
              width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
            }
            breakpoints={{
              1378: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              998: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              625: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            slidesPerGroup={5}
            preventClicksPropagation={true}
            preventClicks={true}
            scrollbar={{ draggable: false, hide: true }}
            slideToClickedSlide={false}
            loop={true}
            >
                <div className='listContainer' ref={listRef} >
                    {movies.map(
                        (mov, i) => ((isLargeRow && mov.poster_path) ||
                        (!isLargeRow && mov.backdrop_path)) && 
                          <SwiperSlide
                          className="listItem"
                          key={i}
                          onClick={() => {
                            setMovieImg(mov.backdrop_path)
                            setMovieTitle((isLargeRow && mov.original_name)|| (!isLargeRow && mov.original_title) )
                            setMovieOverview(mov.overview)
                          }}
                          >
                            <img
                            src={`${srcimg}${isLargeRow ? mov.poster_path : mov.backdrop_path}`}
                            alt={mov.original_title}
                            className={`row_poster ${isLargeRow && 'row_poster-large'}`}
                            key={mov.id}
                          />
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    )
}



export default List;