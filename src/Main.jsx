import React, { useState } from "react"
import Header from "./Header"
import Card from "./Card"

const Main=()=>{
    const [query,setquery]=useState("");
    const [res,setres]=useState([]);
    const changeevent=(e)=>{
        e.preventDefault();
        setquery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=973138096d3d5935c81b2a23270094aa&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(!data.errors)
            {
                console.log(data);
                setres(data.results);
            }
            else
            {
                setres([]);
            }
        })
    }
    return(
        <>
        <Header />
        <div>
            <input type="text" placeholder="Enter movie name" onChange={changeevent} value={query} />
        </div>
        <div className="movies">
                {res.length>0 && (
                    <ul>
                        {res.map((movie)=>(
                            <li key={movie.id}>
                                <Card movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}
        </div>
        </>
    )
}

export default Main;