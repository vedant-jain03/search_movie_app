import React from "react"
const Card=({movie})=>{
    return(
        <>
        <div className="card">
            <div  className="image-wrapper">
            {
                movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="{`${movie.title} Poster`}"/>
                ):(
                    <div></div>
                )
            }
            </div>
            <div>
                <div className="info">
                    <h1>{movie.title}</h1>
                    <h4>{movie.release_date}</h4>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;