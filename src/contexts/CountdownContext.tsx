//Contexto

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Countdown } from "../components/Countdown";
import { ChallengesContext } from "./ChallengesContext";


//formato dos dados retornados
interface CountdownContextDate {
    minutes: number;
    seconds: number
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextDate)

//variaveis
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);


    //funcionalidade minutos segundos
    const [time, setTime] = useState(0.2 * 60)//25 mn em sg

    //armazena se contdown ativo ou não
    const [isActive, setIsActive] = useState(false);
    //inicia como false | time 00
    const [hasFinished, setHasFinished] = useState(false);


    const minutes = Math.floor(time / 60);//pegar minutos arredondado
    const seconds = time % 60; //resto da divisão


    //Funções
    //Deccrescente
    function startCountdown() {
        setIsActive(true);//ativa
    }

    //reset
    function resetCountdown() {
        clearTimeout(countdownTimeout);//cancela a execução do timeout
        setIsActive(false);//desativa
        setTime(0.1 * 60);//valor inicial
        setHasFinished(false);

    }

    //efeito colateral de decrecimo
    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {//retorna para countdownTimeout
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);//00 verdadeiro
            setIsActive(false);//count finalizado
            startNewChallenge();

        }
    }, [isActive, time])//executa quando valor de active mudar | e Time

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown

        }}>
            {children}
        </CountdownContext.Provider>
    )
}