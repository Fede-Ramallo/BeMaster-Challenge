import React, {useState} from "react";
import './Browse.css';
import Featured from "./Featured/Featured";
import List from '../Lists/Lists';
import Footer from "../Footer/Footer";
import requests from '../../utils/Requests';

const Home = ({searchTerm, movies, setSearchTerm, setMovies}) => {
    const [showModal, setShowModal] = useState(false);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieOverview, setMovieOverview] = useState('');
    const [movieImg, setMovieImg] = useState('');
    return(
        <div className="BrowseContainer">
            <div className="mainView">
                <Featured fetchTrending={requests.fetchTrending}/>
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
                </div>
            <Footer />
        </div>
    )
}

export default Home;