import { object } from "prop-types";
import styles from "./player.module.css";
import { ROLE_IMAGE } from "../../../tools/constants";

const Player = ({ player }) => {
  const playerName =
    player.first_name && player.last_name
      ? player.first_name + " " + player.last_name
      : "N/A";

  const playerRoles = player.roles.length > 0 && player.roles[0];
  const roleImageUrls = playerRoles
    ? playerRoles.name.includes("/")
      ? playerRoles.name.split("/").map((role) => ROLE_IMAGE[parseInt(role)])
      : [ROLE_IMAGE[parseInt(playerRoles.name)]]
    : undefined;

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
        {playerName} |
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
  player: object.isRequired,
};

export default Player;
