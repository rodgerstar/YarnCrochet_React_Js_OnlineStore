import React, { useContext } from "react";
import PropTypes from 'prop-types';  // Import PropTypes
import './YarnDisplay.css';
import { StoreContext } from "../../Context/StoreContext.jsx";

const YarnDisplay = ({ category }) => {
    const { yarn_piece } = useContext(StoreContext);

    if (!yarn_piece || yarn_piece.length === 0) {
        return (
            <div className='yarn-display' id='yarn-display'>
                <h2>Top Crafts Near You!</h2>
                <p>No yarn pieces available at the moment.</p>
            </div>
        );
    }

    return (
        <div className='yarn-display' id='yarn-display'>
            <h2>Top Crafts Near You!</h2>
            {yarn_piece.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
            <p>Category: {category}</p>
        </div>
    );
};

// Add prop validation for 'category'
YarnDisplay.propTypes = {
    category: PropTypes.string.isRequired,  // Ensure category is a required string
};

export default YarnDisplay;
