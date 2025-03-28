import React from "react";
import { Link } from "react-router-dom";
import hpimage from "../assets/himage.jpg";
 function Start(){

    return(
    
<>
        <div className="flex justify-center items-center min-h-screen pt-20 bg-red-800"
              style={{
                backgroundImage: `url(${hpimage})`, 
                backgroundSize: '50% 100%',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', 
                backgroundRepeat: "no-repeat",
              }}
            >

                <Link to="/"><button className="hover:bg-red-600 text-black font-semibold px-4 py-2 rounded-lg mb-90 mr-120">
              User
            </button></Link>

            <Link to="/Content"><button className="hover:bg-red-600 text-black font-semibold px-4 py-2 rounded-lg">
              Admin
            </button></Link>

        </div>
        
        
        </>
    )};

 export default Start;