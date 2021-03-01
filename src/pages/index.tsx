/* pagina onde chamamos os componentes */

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";



import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;

}
//retornar dados na tela 32:29
export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider //componente
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>

      <div className={styles.container}>

        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  )
}


//backend
//recuperar dados F5 | getServer: manipula dados do back p/ front | roda no node
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //cham api | pega dados do cookie
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),//conversão de string p/ number
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }

}
