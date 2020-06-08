import React, { useState } from "react";
import Match from "./match";
import { array, bool } from "prop-types";
import styles from "./matchlist.module.css";
import classNames from "classnames";
import { tournamentDateCompare } from "../../tools/sorting";

const MatchList = ({ tournaments, showControls }) => {
  tournaments = tournaments.sort(tournamentDateCompare);
  const [showPast, setShowPast] = useState(true);
  const [showUpcoming, setShowUpcoming] = useState(false);

  const filterMatches = (tournament) => {
    const now = Date.now();
    const tStart = new Date(tournament.start);
    if (showPast && tStart < now) {
      return tournament;
    }
    if (showUpcoming && tStart > now) {
      return tournament;
    }
  };

  return (
    <>
      {showControls && (
        <div className={styles.filters}>
          <a
            className={classNames({ [styles.pressed]: showPast })}
            onClick={() => setShowPast(!showPast)}
          >
            <span>{showPast ? "hide past" : "show past"}</span>
          </a>
          <a
            className={classNames({ [styles.pressed]: showUpcoming })}
            onClick={() => setShowUpcoming(!showUpcoming)}
          >
            <span>{showUpcoming ? "hide upcoming" : "show upcoming"}</span>
          </a>
        </div>
      )}
      {!(showPast || showUpcoming) && (
        <p>No matches found for the chosen filters</p>
      )}
      <ul className={styles.matchList}>
        {tournaments
          .filter((tournament) => filterMatches(tournament))
          .map((tournament) => (
            <li key={tournament.id}>
              <Match match={tournament} />
            </li>
          ))}
      </ul>
    </>
  );
};

MatchList.propTypes = {
  tournaments: array.isRequired,
  showControls: bool,
};

export default MatchList;
