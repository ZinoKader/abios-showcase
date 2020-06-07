import React, { useRef } from "react";
import Head from "../../components/head";
import Roster from "../../components/roster";
import Layout from "../../components/layout";
import { getRosterByTeamId, getTeamStanding } from "../../api/api";
import { number } from "prop-types";

const TeamDetails = ({ id }) => {
  const { teams, players, dpc_points } = getRosterByTeamId(id);
  const [team] = teams;

  return (
    <>
      <Head title={"Team | " + team.name} />
      <Layout>
        <Roster
          teams={teams}
          players={players}
          points={dpc_points}
          standing={getTeamStanding(id)}
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
