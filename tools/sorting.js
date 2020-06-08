export const rosterDpcCompare = (a, b) => b.dpc_points - a.dpc_points;
export const tournamentDateCompare = (a, b) =>
  new Date(b.start) - new Date(a.start);
