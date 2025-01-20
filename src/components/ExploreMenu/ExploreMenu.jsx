import React from "react";
import './ExploreMenu.css'
import { menu_list} from "../../assets/assets.js";

const ExploreMenu = () => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Crafts</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto at beatae consequatur, deleniti dignissimos eius eligendi eveniet fuga libero, numquam, obcaecati odit optio quaerat quia sequi unde ut.</p>
            <div className='explore-menu-list'>
                {menu_list.map((item,index)=>{
                    return (
                        <div key={index} className='explore-menu-list-item'>
                            <img src={item.menu_image} alt=""/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreMenu