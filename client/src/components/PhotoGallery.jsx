import {FaShoppingCart} from "react-icons/fa";
import {IoIosHeart} from "react-icons/io";

import ImageCard from "./ImageCard"


const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
    <h3 className="text-3xl font-semibold my-14">Photos</h3>
    {/* all my photo will be listed this div */}

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">

        {/* image card */}
    
<ImageCard title="The Beach"
            author="Ap945"
            img="https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={10}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />

<ImageCard title="The unknown"
            author="Ap945"
            img="https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={25}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />

<ImageCard title="The unknown"
            author="Ap945"
            img="https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={25}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />

<ImageCard title="The unknown"
            author="Ap945"
            img="https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={25}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />

<ImageCard title="The unknown"
            author="Ap945"
            img="https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={25}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />

<ImageCard title="The unknown"
            author="Ap945"
            img="https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={25}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />

<ImageCard title="The unknown"
            author="Ap945"
            img="https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={25}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />

<ImageCard title="The unknown"
            author="Ap945"
            img="https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={25}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />

<ImageCard title="The unknown"
            author="Ap945"
            img="https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            price={25}
            icon1={
                <FaShoppingCart className=" text-2xl text-black cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/>      
            }
            icon2={
                <IoIosHeart className=" text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all
                ease-linear duration-300"/> 
            }
        />
        
           
    

     


        </div>
    </div>
         
    
  )
}

export default PhotoGallery