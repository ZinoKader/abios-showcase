import React from "react";
import { object } from "prop-types";
import classNames from "classnames";
import { hourMinuteDiffFormat, ymdFormat } from "../../../tools/timeUtils";
import styles from "./match.module.css";

const Team = ({ team }) => (
  <div className={styles.side}>
    <img src={team.images.default} />
    <p>{team.name}</p>
  </div>
);

const Match = ({
  match: {
    title: matchName,
    tournament_name: tournamentName,
    start,
    end,
    bestOf,
    scores,
    rosters: { 0: firstRoster, 1: secondRoster },
  },
}) => {
  const [firstTeam] = firstRoster.teams;
  const [secondTeam] = secondRoster.teams;

  const isPlayed = new Date(start) < Date.now();
  const ymdStartDate = ymdFormat(new Date(start));

  const matchLength =
    start && end
      ? hourMinuteDiffFormat(new Date(start), new Date(end))
      : undefined;

  return (
    <div className={styles.root}>
      <div className={styles.date}>
        <div className={styles.dateIcon} />
        <p>{ymdStartDate}</p>
      </div>

      <Team team={firstTeam} />
      <div className={styles.center}>
        <p>
          <b>{tournamentName}</b>
        </p>
        <p>{matchName}</p>
        <p className={styles.scores}>
          {isPlayed
            ? scores[firstRoster.id.toString()] +
              " - " +
              scores[secondRoster.id.toString()]
            : "TBD"}
        </p>
        <p>
          BO<b>{bestOf}</b>
        </p>
        {matchLength && <p>{matchLength}</p>}
      </div>
      <Team team={secondTeam} />
    </div>
  );
};

Match.propTypes = {
  match: object.isRequired,
};

export default Match;
