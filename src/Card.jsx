import { useState } from "react";

function Card({title, price=10000, brand}){
  const [favorite, setFavorite] = useState(false);

    return(
        <div className="card">
            {/* <h1 style={{color :"red"}}>Card Title</h1>
            <p>Title Info</p>
            <button>Click me</button> */}
            <h1>{title}</h1>
            <span>{price}</span>
            <p>{brand}</p>
            <button onClick={()=>setFavorite(!favorite)}>Favorite</button>
            {favorite ? "favorite" : "Not Favorite"}
        </div>
    );
};
export default Card;