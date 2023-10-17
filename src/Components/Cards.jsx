import React from "react";

class Cards extends React.Component{

    render(){
        return(
            <div className="cards">
            <h1>Top Games</h1>
            <div className="cards-div">
                <div>
                    <img src="./imgs/lol.jpg" alt="" height={250} width={150}/>
                    <h2>League of <br/> Legends</h2>
                </div>
                <div>
                    <img src="./imgs/csgo.jpg" alt="" height={250} width={150}/>
                    <h2>CS:GO</h2>
                </div>
                <div>
                    <img src="./imgs/valorant.jpg" alt="" height={250} width={150} />
                    <h2>VALORANT</h2>
                </div>
                <div>
                    <img src="./imgs/dota.jpg" alt="" height={250} width={150} />
                    <h2>DOTA 2</h2>
                </div>
                <div>
                    <img src="./imgs/cod.jpg" alt="" height={250} width={150}/>
                    <h2>Call of Duty</h2>
                </div>
                <div>
                    <img src="./imgs/pokemon.jpg" alt="" height={250} width={150} />
                    <h2>Pokémon</h2>
                </div>
                <div>
                    <img src="./imgs/gaming_en-mittig-1.jpg" alt="" height={250} width={150}/>
                    <p>Everything Gaming<br/>and more...</p>
                </div>
            </div>
            <hr />
            </div>
        )
    }
}

export default Cards;