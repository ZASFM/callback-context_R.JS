import React from "react";
import { Link } from "react-router-dom";


const Cocktails=(props)=>{
   return (
      <div>
         <img src={props.image} alt={props.info}/>
         <h3>{props.name}</h3>
         <h4>{props.glass}</h4>
         <p>{props.info}</p>
         <Link to={`/cocktails/${props.id}`}>
            More info
         </Link>
      </div>
   )
}

export default Cocktails;