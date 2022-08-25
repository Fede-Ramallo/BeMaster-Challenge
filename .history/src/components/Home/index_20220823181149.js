import React, {useState} from "react";
import './Browse.css';
import Featured from "./Featured/Featured";
import List from '../Lists/Lists';
import Footer from "../Footer/Footer";
import requests from '../../utils/Requests';
import Modal from "./Modal/Modal";
import Searched from "./Searched/Searched";

const Home = ({searchTerm, movies, setSearchTerm, setMovies}) => {
    const [showModal, setShowModal] = useState(false);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieOverview, setMovieOverview] = useState('');
    const [movieImg, setMovieImg] = useState('');
    return(
        <div className="BrowseContainer">
            <div className="mainView">
                <Featured fetchTrending={requests.fetchTrending}/>
               {searchTerm === '' ? <div className="Rows">
                <List 
                    title='Netflix Originals'
                    fetchURL={requests.fetchNetflixOriginals}
                    isLargeRow
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                />
                <List 
                    title='Trending Now'
                    fetchURL={requests.fetchTrending}
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                />
                <List 
                    title='Horror Movies'
                    fetchURL={requests.fetchHorrorMovies}
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                />
                <List 
                    title='Romance Movies'
                    fetchURL={requests.fetchRomanceMovies}
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                />
                <List 
                    title='Action Movies'
                    fetchURL={requests.fetchActionMovies}
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                />
                <List 
                    title='Comedy Movies'
                    fetchURL={requests.fetchComedyMovies}
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                />
                <List 
                    title='Documentaries'
                    fetchURL={requests.fetchDocumentaries}
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                />
                <List 
                    title='Sci-Fi Movies'
                    fetchURL={requests.fetchSciFi}
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                />
                </div> : <Searched 
                    setShowModal={setShowModal}
                    setMovieTitle={setMovieTitle}
                    setMovieOverview={setMovieOverview}
                    setMovieImg={setMovieImg}
                    movies={movies}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm} 
                    setMovies={setMovies}
                    />
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} movieTitle={movieTitle} movieOverview={movieOverview} movieImg={movieImg} />
            <Footer />
        </div>
    )
}

export default Home;