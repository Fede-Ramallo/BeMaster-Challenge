const API_KEY = 'cc5a9d7cf4bac59dc6eb63d3cba779b3';

const requests = {
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_genres=27&with_watch_monetization_types=flatrate`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
    fetchSciFi:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_genres=878&with_watch_monetization_types=flatrate`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
};

export default requests;