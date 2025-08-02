/* FEITO POR IMDAVIXZ. */

'use client'

import Image from "next/image";
import Link from "next/link"

import { useState, useEffect } from 'react';

export default function Home() {
/* FEITO POR IMDAVIXZ. */

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answer, setAnswer] = useState('');
    const [resultMessage, setResultMessage] = useState('');
    const [buttonText, setButtonText] = useState('Verificar');
    const [resultClass, setResultClass] = useState('');

    const generateNewQuestion = () => {
      const newNum1 = Math.floor(Math.random() * 10) + 1;
      const newNum2 = Math.floor(Math.random() * 10) + 1;
      setNum1(newNum1);
      setNum2(newNum2);
      setAnswer('');
      setResultMessage('');
      setResultClass('');
      setButtonText('Verificar');
    };

/* FEITO POR IMDAVIXZ. */

    useEffect(() => {
      generateNewQuestion();
    }, []);

/* FEITO POR IMDAVIXZ. */

    const handleButtonClick = () => {
        if (buttonText === 'Verificar') {
            if (answer.trim() === '') {
                setResultMessage('Você precisa colocar um numero!');
                setResultClass('incorrect');
                return;
            }

            const correct = num1 * num2;
            if (parseInt(answer, 10) === correct) {
                setResultMessage('O seu numero esta certo.');
                setResultClass('correct');
                setButtonText('Continuar');
            } else {
                setResultMessage('O seu numero esta errado.');
                setResultClass('incorrect');
            }
        } else if (buttonText === 'Continuar') {
            generateNewQuestion();
        }
    };

/* FEITO POR IMDAVIXZ. */

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    };
/* FEITO POR IMDAVIXZ. */
  return (
    <div>
      <header>
        <h1 className="title">Verificador Tabuada</h1>
        <p className="subtitle">Por: Davi</p>
        <Image alt="tungtung" className="tungtung" src="/TungTung.png" width={64} height={64}></Image>
      </header>

      <div className="question">
        <h1 className="questionText" id="questionText">{num1} × {num2}</h1>

        <input className="questionInput" value={answer} onChange={(e) => setAnswer(e.target.value)} onKeyDown={handleKeyDown} type="number" name="result" placeholder="Coloque o resultado." id="result"></input>
      </div>

      <p className={`result ${resultClass}`} id="result">{resultMessage}</p>

      <div className="button-container">
        <button onClick={handleButtonClick} id="questionButton" className="questionButton">{buttonText}</button>
      </div>

      <footer>
        <Link className="subtitle" href="https://github.com/ImDavixzDev/tabuada.imdavixz.online">Github</Link>
      </footer>
    </div>
  );
}

/* FEITO POR IMDAVIXZ. */