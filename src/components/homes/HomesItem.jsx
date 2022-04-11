import React from "react";
import PropTypes from "prop-types"

function HomesItem(props){
    const {name, imageUrl, city, country} = props.home;
    return(
        <div className="homes-item">
            <img className="homes-img" src={imageUrl} alt={name}/>
            <a className="homes-link">{name}</a>
            <span className="homes-place">{city}, {country}</span>
        </div>
    )
}

HomesItem.propTypes = {
    homes : PropTypes.object
}

export default HomesItem