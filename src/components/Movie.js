import React from 'react';

const plceholder_img = "https://s4.scoopwhoop.com/anj2/5b1a4dfb6e510a7d2408a90a/ce95df28-d077-4817-a0e0-52e7b14df88f.jpg"

const Movie = ({ movie }) => {
    const imge = 
        movie.poster === "N/A" ? plceholder_img : movie.Poster

    return (
        <div className="movie">
        <h3>{ movie.Title }</h3>
        <div>
            <img 
             width = "200"
             alt={` The movie : ${ movie.Title }`}
             src={imge}></img>

             </div>
            <p>({movie.Year})</p>
            </div>
    )
}



export default Movie;