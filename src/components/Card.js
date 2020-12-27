import React from 'react';

const Card = (props) => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt={props.id} src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${props.id}.png`}></img>
            <div>
                <h2>{props.id}</h2>
                <h3>{props.titles}</h3>
            </div>
        </div>
    )
}

export default Card;