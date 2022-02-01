import React from 'react';
import './choosedplayers.css';
import {SportsBasketball} from '@material-ui/icons';

const ChoosedPlayers = ({ selectedPlayer }) => {
    return(

            <div className="available_players-container">
                <br />
                <h4>Player Name and Points </h4>
                <br />

                {selectedPlayer.map(({last_name, points}, i) =>(
                <div key={i} className="available_players" >
                      {last_name} {points}  <SportsBasketball id="basketball_icon"/>
                </div>
                ))}
            </div>
    )
}

export default ChoosedPlayers;