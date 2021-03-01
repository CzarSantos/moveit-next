import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'



export function Countdown() {
    //importa dados
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    //formatação de dados
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');//se string não tiver 2 caracteres padStart preenche com 0 | passa posiçoes do vetor
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');//se string não tiver 2 caracteres padStart preenche com 0


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            { hasFinished ? (//se contador terminou
                <button
                    disabled
                    className={styles.countdownButton} >

                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {  isActive ? (//lógica botão se ativo 

                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}>

                                Abandonar ciclo
                            </button>

                        ) : (/* senão */

                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}>

                                    Iniciar um ciclo
                                </button>
                            )}

                    </>
                )}
        </div>
    );
}

/* verificado */