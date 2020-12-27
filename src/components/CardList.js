import React from 'react';
import Card from './Card';

const CardList = ({champions,titles}) =>{
    // if (true){
    //     throw new Error("NOOOOO");
    // }
    return (
        <div>
            {
                champions.map((user,i) => {
                return (
                <Card 
                    key={i} 
                    id={champions[i]} 
                    titles={titles[i]}
                    />);
            })}
        </div>
    )
}

export default CardList;