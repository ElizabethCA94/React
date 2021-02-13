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
        secretId: state.secretId,
      }),
    })
      .then((response) => response.json())
      .then((quizesResponse) => {
        if (quizesResponse?.length) {
          setQuizes(quizesResponse);
          console.log(quizes);
        }
      })
      .catch((e) => console.log(e));
  }

  return (
    <List divided relaxed>
      jazz
      {state.activeQuiz}
      {quizes.map((quiz) => (
        <div to="/quiz/edit" onClick={() => {
          actions({
            type: "setActiveQuiz",
            payload: { ...state, activeQuiz: quiz },
          });
        }}>
          <List.Item>
            <List.Icon
              name="file alternate outline"
              size="large"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header as="a">{quiz.description}</List.Header>
              <List.Description as="a">{quiz.functionParams}</List.Description>
              <List.Description as="a">{quiz.expectedOutput}</List.Description>
            </List.Content>
          </List.Item>
        </div>
      ))}
    </List>
  );
};

export default Profile;
