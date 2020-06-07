import { object } from "prop-types";
import styles from "./player.module.css";

const Player = ({ player }) => {
  const realPlayerName =
    player.first_name || player.last_name
      ? player.first_name + " " + player.last_name
      : "N/A";

  const role = player.roles.length > 0 ? player.roles[0].name : "N/A";

  return (
    <div className={styles.root}>
      <img className={styles.portrait} src={player.images.default} />
      <p className={styles.playerName}>{realPlayerName}</p>
      <p>({player.nick_name})</p>
      {<p>Position: {role}</p>}
    </div>
  );
};

Player.propTypes = {
  player: object,
};

export default Player;
