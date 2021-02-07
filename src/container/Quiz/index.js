import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Provider';
import Header from '../../components/Header';
import Quiz from '../../components/Quiz.js';


const QuizContainer = () => {

  const context = useContext(GlobalContext);
  console.log("context", context);
  return (
    <div>
      <Header></Header>
      <h1>Quiz</h1>
      <Quiz
        question={'Escribe una función que retorne las palabras "hola mundo"'}
        functionParams={''}
        result={'hola mundo'}
      ></Quiz>
      <Quiz
        question={'Tu parámetro de entrada es 5, haz que la función retorne un 6 (a + 1)'}
        functionParams={'a = 5'}
        result={6}
      ></Quiz>
      <Quiz
        question={'Tu primer parámetro de entrada es 6 y tu segundo parámetro es 7, haz que la función retorne un 13 (a + b)'}
        functionParams={'a = 6 , b = 7'}
        result={13}
      ></Quiz>
      <Quiz
        question={'Tu parámetro de entrada es 5, haz que la función retorne un 6 (a + 1)'}
        functionParams={'a = 5'}
        result={6}
      ></Quiz>
    </div>
  );
};

export default QuizContainer;