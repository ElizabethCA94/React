import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Provider';
import QuizUI from '../../layout/Quiz';


export default function({props}) {

  const context = useContext(GlobalContext);
  console.log("context", context);
  return (
    <div>
      <QuizUI
        question={'Escribe una función que retorne las palabras "hola mundo"'}
        functionParams={''}
        result={'hola mundo'}
      ></QuizUI>
      <QuizUI
        question={'Tu parámetro de entrada es 5, haz que la función retorne un 6 (a + 1)'}
        functionParams={'a = 5'}
        result={6}
      ></QuizUI>
      <QuizUI
        question={'Tu primer parámetro de entrada es 6 y tu segundo parámetro es 7, haz que la función retorne un 13 (a + b)'}
        functionParams={'a = 6 , b = 7'}
        result={13}
      ></QuizUI>
      <QuizUI
        question={'Tu parámetro de entrada es 5, haz que la función retorne un 6 (a + 1)'}
        functionParams={'a = 5'}
        result={6}
      ></QuizUI>
    </div>
  );
};

