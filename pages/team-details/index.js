import React from "react";
import Head from "../../components/head";
import Roster from "../../components/roster";
import MatchList from "../../components/matchlist";
import Layout from "../../components/layout";
import {
  getRoster,
  getRosterStanding,
  getRosterTournaments,
} from "../../api/api";
import { number } from "prop-types";

const TeamDetails = ({ id }) => {
  const { teams, players, dpc_points } = getRoster(id);
  const [team] = teams;

  return (
    <>
      <Head title={"Team | " + team.name} />
      <Layout>
        <Roster
          teams={teams}
          players={players}
          points={dpc_points}
          standing={getRosterStanding(id)}
          matchList={
            <MatchList tournaments={getRosterTournaments(id)} showControls />
          }
          detailed
        />
      </Layout>
    </>
  );
};

TeamDetails.getInitialProps = ({ query: { id } }) => {
  return { id: parseInt(id) };
};

TeamDetails.propTypes = {
  id: number,
};

export default TeamDetails;
