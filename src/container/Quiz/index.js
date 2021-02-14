import React, { useState } from "react";
import QuizUI from "../../layout/Quiz";
import "./index.css";
import { useParams } from "react-router-dom";

export default function ({ props }) {
  let { id } = useParams();
  const [quizes, setQuizes] = useState([]);

  if (!quizes.length) {
    fetch("http://localhost:4000/dev/listQuiz", {
      method: "post",
      body: JSON.stringify({
        userId: id,
      }),
    })
      .then((response) => response.json())
      .then((quizesResponse) => {
        if (quizesResponse?.length) {
          setQuizes(quizesResponse);
        }
      })
      .catch((e) => console.log(e));
  }

  return (
    <div class="lf-quizzes-page">
      {quizes.map((quiz) => (
        <QuizUI
          question={quiz.description}
          functionParams={quiz.functionParams}
          result={quiz.expectedOutput}
        ></QuizUI>
      ))}

      {/* <QuizUI
        question={'Escribe una función que retorne las palabras "hola mundo"'}
        functionParams={""}
        result={"hola mundo"}
      ></QuizUI>

      <QuizUI
        question={
          "Tu parámetro de entrada es 5, haz que la función retorne un 6 (a + 1)"
        }
        functionParams={"a = 5"}
        result={6}
      ></QuizUI>
      <QuizUI
        question={
          "Tu primer parámetro de entrada es 6 y tu segundo parámetro es 7, haz que la función retorne un 13 (a + b)"
        }
        functionParams={"a = 6 , b = 7"}
        result={13}
      ></QuizUI>
      <QuizUI
        question={
          "Tu parámetro de entrada es 5, haz que la función retorne un 6 (a + 1)"
        }
        functionParams={"a = 5"}
        result={6}
      ></QuizUI> */}
    </div>
  );
}
