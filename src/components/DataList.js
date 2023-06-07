import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataItems from './DataItems';

const DataList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
      console.log(response.data)
      setShows(response.data)
    }
    getShows();
  }, [])

  return (
    <div className='container'>
      {shows.map(show => {
        return (
          <DataItems
            ImageUrl={show.show.image.medium}
            name={show.show.name}
            language={show.show.language}
            summary={show.show.summary}
            url={show.show.url}
          />  
        )
      })}
    </div>
  )
}

export default DataList

// data.show.name