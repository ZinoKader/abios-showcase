import { object } from "prop-types";
import styles from "./player.module.css";
import { POSITION_IMAGE } from "../../tools/constants";

const Player = ({ player }) => {
  const realPlayerName =
    player.first_name || player.last_name
      ? player.first_name + " " + player.last_name
      : "N/A";
  const roleImageUrls =
    player.roles.length > 0
      ? player.roles[0].name.includes("/")
        ? player.roles[0].name
            .split("/")
            .map((role) => POSITION_IMAGE[parseInt(role)])
        : [POSITION_IMAGE[parseInt(player.roles[0].name)]]
      : "";

  return (
    <div className={styles.root}>
      <img className={styles.portrait} src={player.images.default} />
      <div className={styles.region}>
        <img src={player.country.images.default} />
        <p>
          {player.country.short_name} / {player.country.region.short_name}
        </p>
      </div>
      <p className={styles.playerName}>
        {realPlayerName} |
        <span className={styles.nickName}> {player.nick_name}</span>
      </p>
      {roleImageUrls && (
        <div className={styles.roles}>
          {roleImageUrls.map((roleImageUrl) => (
            <img
              key={roleImageUrl}
              className={styles.role}
              src={roleImageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Player.propTypes = {
  player: object,
};

export default Player;
