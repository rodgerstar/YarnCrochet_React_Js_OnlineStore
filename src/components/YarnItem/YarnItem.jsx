import React, {useState} from "react";
import './YarnItem.css'
import {assets} from "../../assets/assets.js";

const YarnItem = ({id,name,price,description,image}) => {

        const [itemCount,setItemCount] = useState(0)

    return (
        <div className='yarn-item'>
            <div className="yarn-item-img-container">
                <img className='yarn-item-image' src={image} alt=""/>
                {!itemCount 
                    ? <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=""/>
                    :<div className='yarn-item-counter'>
                        <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=""/>
                        <p>{itemCount}</p>
                        <img onClick={()=>setItemCount(prev=>prev+1)}src={assets.add_icon_green} alt=""/>
                    </div>
                }
            </div>
            <div className="yarn-item-info">
               <div className="yarn-item-name-rating">
                   <p>{name}</p>
                   <img src={assets.rating_starts} alt=""/>
               </div>
                <p className='yarn-item-desc'>{description}</p>
                <p className="food-item-price">Ksh.{price}</p>
            </div>

        </div>
    )
}

export default YarnItem