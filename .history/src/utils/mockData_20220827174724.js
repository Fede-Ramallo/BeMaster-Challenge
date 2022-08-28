import requests from "./Requests";

export const nav = [
  { name: "Home", refer: "/home" },
  { name: "TV Shows", refer: "/under" },
  { name: "Movies", refer: "/under" },
  { name: "New & Popular", refer: "/under" },
  { name: "My List", refer: "/under" },
];

export const listData = [
  { title: "Sci-Fi Movies", slug: "Sci-Fi", category: "35", isLargeRow: true, request: requests.fetchSciFi },
  { title: "Horror Movies", slug: "horror", category: "27", isLargeRow: false, request: requests.fetchHorrorMovies },
  { title: "Romance Movies", slug: "romance", category: "10749", isLargeRow: false,  },
  { title: "Comedy Movies", slug: "comedy", category: "878", isLargeRow: false },
  { title: "Documentaries", slug: "documentaries", category: "99", isLargeRow: false },
];
