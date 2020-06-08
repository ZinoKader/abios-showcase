import React from "react";
import Player from "./player";
import { array } from "prop-types";
import styles from "./playerlist.module.css";

const PlayerList = ({ players }) => {
  return (
    <ul className={styles.playerList}>
      {players.map((player) => (
        <li key={player.id}>
          <Player player={player} />
        </li>
      ))}
    </ul>
  );
};

PlayerList.propTypes = {
  players: array.isRequired,
};

export default PlayerList;
