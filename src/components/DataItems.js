import React from 'react'
import { Link } from 'react-router-dom'


const DataItems = ({ score, name, ImageUrl, language, summary, url }) => {
  return (
    <>
      <div className="Container mb-5">
        {/* <div className="row">
          <div className="col-ms-8"> */}
        <div class="card" style={{ width: "18rem" }}>
          <img src={ImageUrl} class="card-img-top" alt="img" />
          <div class="card-body">
            <h3 class="card-title">{name}</h3>
            <h6 class="card-text"><b>Language: </b> {language}</h6>
            <h6 class="card-text"><b>Overview: </b> {summary.replace(/<p[^>]*>/, "").replace(/<\/p>/, "").replace(/<b[^>]*>/, "").replace(/<\/b>/, "").substring(0, 175)}</h6>
            <Link to={url} href="page2" class="btn btn-primary mt-4">Watch now...</Link>
          </div>
        </div>
        {/* </div>
        </div> */}
      </div>
    </>
  )
}

export default DataItems