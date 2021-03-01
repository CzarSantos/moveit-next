//solução para componetes conversarem entre si
import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';


//propriedades
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}


interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
    closeLevelUpModal: () => void;


}

//criando contexto
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {//rest: todoas as outra propriedades
    //setar level, desafios completed
    const [level, setLevel] = useState(rest.level ?? 1);//se naõ existir usa 1
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);//barra progresso


    //
    const [activeChallenge, setActiveChallenge] = useState(null)

    //quando subir de level abrir page
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);


    //pontuação 
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    //pedi permissão ao user | efeito colateral
    useEffect(() => {
        Notification.requestPermission();
    }, [])//executa primeira função uma unica vez

    //salvar dados | cookies
    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    }, [level, currentExperience, challengesCompleted]);//executa quando houver alteração de dados

    //funções
    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);//exibe page

    }

    //fechar page de levelUP
    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
    }
    //pega dados do array desafios
    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        //audio
        new Audio('/notification.mp3').play();

        //Notificação
        if (Notification.permission === 'granted') {
            new Notification('Novo desafio ! 👽 👻', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }

    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    //pega experiência, soma e armazena
    function completedChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;//soma xp

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);//zera desafio
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        //Todos elementos dentro do provider passam a ter os dados dentro do contexto

        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completedChallenge,
            closeLevelUpModal
        }}
        >
            {children}
            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>

    );
}

/* vlevelUpModal: pagina ao subir de level*/