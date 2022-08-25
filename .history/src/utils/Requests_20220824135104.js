const API_KEY = 'cc5a9d7cf4bac59dc6eb63d3cba779b3';

const requests = {
    fetchRandom: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=5&with_genres=28&with_watch_monetization_types=flatrate`,
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_genres=27&with_watch_monetization_types=flatrate`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
    fetchSciFi:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_genres=878&with_watch_monetization_types=flatrate`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
    fetchMovieGenres:`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchTvGenres:`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`,
    fetchDetails: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`
};

export default requests;