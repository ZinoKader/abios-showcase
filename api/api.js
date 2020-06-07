import data from "../data/series_data.json";
import { rosterDpcCompare } from "../tools/sorting";

/**
 * The field dpc_points is tied to a particular roster, while we're really just interested
 * in the team. Unfortunately, having dpc_points tied to the roster forces us to treat a roster
 * as a team.
 */
export const getRosters = () => {
  let rosters = [];
  data.forEach((tournament) => {
    tournament.rosters.forEach((r1) => {
      !rosters.some((r2) => r1.teams[0].id == r2.teams[0].id) &&
        rosters.push(r1);
    });
  });
  return rosters;
};

export const getRosterByTeamId = (id) => {
  for (const tournament of data) {
    for (const roster of tournament.rosters) {
      const [team] = roster.teams;
      if (team.id == id) {
        return roster;
      }
    }
  }
};

export const getTeamStanding = (id) =>
  getRosters()
    .sort(rosterDpcCompare)
    .findIndex(({ teams: { 0: team } }) => id == team.id) + 1;
