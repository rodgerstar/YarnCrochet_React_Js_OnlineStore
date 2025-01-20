import React, {useState} from "react";
import './Home.css'
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import YarnDisplay from "../../components/YarnDisplay/YarnDisplay.jsx";

const Home = () => {

        const [category,setCategory] = useState("All")

    return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <YarnDisplay category={category}/>
        </div>
    )
}

export default Home