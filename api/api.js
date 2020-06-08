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
      !rosters.some((r2) => r1.id == r2.id) && rosters.push(r1);
    });
  });
  return rosters;
};

export const getRoster = (id) => {
  for (const tournament of data) {
    if (Object.values(tournament.seeding).includes(id)) {
      return tournament.rosters.find((roster) => roster.id == id);
    }
  }
};

export const getRosterStanding = (id) =>
  getRosters()
    .sort(rosterDpcCompare)
    .findIndex((roster) => roster.id == id) + 1;

export const getRosterTournaments = (id) =>
  data.filter((tournament) => {
    return Object.keys(tournament.scores).includes(id.toString());
  });
