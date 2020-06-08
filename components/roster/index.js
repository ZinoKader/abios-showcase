import React from "react";
import Link from "next/link";
import styles from "./roster.module.css";
import classNames from "classnames";
import PlayerList from "../playerlist/";
import {
  QUALIFIED_DPC_POINTS,
  QUALIFIED_MAX_STANDING,
} from "../../tools/constants";
import { number, bool, array, node } from "prop-types";

const Roster = ({ teams, players, points, standing, detailed, matchList }) => {
  const [team] = teams;
  const secured = points > QUALIFIED_DPC_POINTS;
  const qualified = standing <= QUALIFIED_MAX_STANDING;
  return (
    <div className={classNames(styles.root, { [styles.detailed]: detailed })}>
      <div className={styles.header}>
        {detailed && (
          <Link href="/">
            <div className={styles.backButton}></div>
          </Link>
        )}
        <img src={team.images.default} />
        <h4>{team.name}</h4>
        <div className={styles.divider}></div>
        <h4 className={styles.standing}>
          {detailed && "Standing: "} {standing}
        </h4>
        <p className={styles.points}>{points} pts</p>
        <div className={styles.pillContainer}>
          {secured && (
            <div className={classNames(styles.pill, styles.secured)}>
              secured
            </div>
          )}
          {qualified && (
            <div className={classNames(styles.pill, styles.qualified)}>
              qualified
            </div>
          )}
          {!(secured || qualified) && (
            <div className={classNames(styles.pill, styles.unqualified)}>
              unqualified
            </div>
          )}
        </div>
      </div>

      {detailed && (
        <>
          <h4 className={styles.subHeading}>Players</h4>
          <PlayerList players={players} />

          {matchList && (
            <>
              <h4 className={styles.subHeading}>Matches</h4>
              {matchList}
            </>
          )}
        </>
      )}
    </div>
  );
};

Roster.propTypes = {
  teams: array.isRequired,
  players: array,
  points: number.isRequired,
  standing: number.isRequired,
  detailed: bool,
  matchList: node,
};

export default Roster;
