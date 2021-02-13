import React, { useContext, useState } from "react";
import { List } from "semantic-ui-react";
import Context from "../../store/context";
import { Link } from "react-router-dom";

const Profile = () => {
  const { state, actions } = useContext(Context);
  const [quizes, setQuizes] = useState([]);

  // const onItemClick = (quizId) => {
  //   console.log("HELOOOOO -----");
  //   console.log(quizId);
  //   // actions({
  //   //   type: "setState",
  //   //   payload: { ...state, activeQuiz: quizId },
  //   // });
  //   actions({
  //     type: "setActiveQuiz",
  //     payload: { ...state, activeQuiz: quizId },
  //   });
  // };

  if (!quizes.length) {
    fetch("http://localhost:4000/dev/listQuiz", {
      method: "post",
      body: JSON.stringify({
        userId: state.userId,
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
    <div>
      <div>
        Comparte el siguiente enlace a tus estudiantes para que puedan acceder a
        tus quizzes
      </div>
      <Link
        to={`/quiz/${state.userId}`}
      >{`http://localhost:3000/quiz/${state.userId}`}</Link>
      <hr></hr>
      <List divided relaxed>
        {state.activeQuizId}
        {quizes.map((quiz) => (
          <Link
            to="/quiz/edit"
            onClick={() => {
              actions({
                type: "setActiveQuiz",
                payload: {
                  ...state,
                  activeQuizId: quiz.id,
                  activeQuizDescription: quiz.description,
                  activeQuizFunctionParams: quiz.functionParams,
                  activeQuizExpectedOutput: quiz.expectedOutput,
                },
              });
            }}
          >
            <List.Item>
              <List.Icon
                name="file alternate outline"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header as="a">{quiz.description}</List.Header>
                <List.Description as="a">
                  {quiz.functionParams}
                </List.Description>
                <List.Description as="a">
                  {quiz.expectedOutput}
                </List.Description>
              </List.Content>
            </List.Item>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default Profile;
