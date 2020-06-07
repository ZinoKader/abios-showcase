import React from "react";
import Link from "next/link";
import Head from "../components/head";
import styles from "./index.module.css";
import Roster from "../components/roster";
import Layout from "../components/layout";
import { getRosters } from "../api/api";
import { rosterDpcCompare } from "../tools/sorting";

const Home = () => {
  return (
    <>
      <Head title="Home" />

      <Layout>
        <div className={styles.hero}>
          <h1 className={styles.title}>DotA 2 Standings</h1>

          <p className={styles.description}>
            Current DotA 2 Pro Circuit standings. Data from {""}
            <a href="//www.abiosgaming.com" target="_blank">
              Abios
            </a>
            .
          </p>

          <div className={styles.row}>
            {getRosters()
              .sort(rosterDpcCompare)
              .map(({ teams, dpc_points, teams: { 0: team } }, i) => (
                <Link
                  key={team.id}
                  href={{
                    pathname: "/team-details",
                    query: { id: team.id },
                  }}
                >
                  <div className={styles.card}>
                    <Roster teams={teams} points={dpc_points} standing={++i} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
