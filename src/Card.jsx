import React from "react";

function Card(props){
    return(
        <div className="Card-Component flex flex-col justify-center items-center gap-2 ">
            <h1 className="Title-of-card text-xl text-black font-bold"> {props.title}</h1>
           <div className=" w-3/4 h-3/4 overflow-hidden">
           <img className="Card-img" src={props.img} alt="nasa gallery"></img>
           </div>
           <div className=" p-4 bg-black cursor-pointer rounded-s-xl " onClick={props.onClick}>
           <h2 className="Img-description text-white font-medium" >  
            {props.explanation} </h2>
           </div>
            
            <h3 className="Img-Date hidden">{props.date}</h3>
            <h4 className="Img-copyright hidden">  {props.copyright}  </h4>

        </div>
    )
}

export default Card;
