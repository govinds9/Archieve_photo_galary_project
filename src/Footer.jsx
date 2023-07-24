import React from "react";

function Footer(props){
    return(
        <footer className="footer-section">
           

           <div className=" flex flex-col justify-center items-center my-5 ">
           <button className="footer-btn bg-blue-400 text-xl rounded-xl font-bold text-white hover:scale-105  font-serif  p-5" onClick={props.onClick}>Load More?</button>
           </div>



    
</footer>    
    )
}

export default Footer;
