import React, { useEffect} from 'react'
import './ContentCategory.css';
import requests from '../../utils/Requests'

const ContentCategory = () => {

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchURL);
          setMovies(request.data.results);
          return request;
        }
    
        fetchData();
      }, [fetchURL]);
  return (
    <div className="Category-Container">ContentCategory</div>
  )
}

export default ContentCategory;