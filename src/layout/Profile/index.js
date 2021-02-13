import React, { useContext, useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';
import Context from "../../store/context";

const Profile = () => {
  const { state } = useContext(Context);
  const [quizes, setQuizes] = useState([]);

  if (!quizes.length) {
    const quizesResponse = fetch("http://localhost:4000/dev/listQuiz", {
      method: "post",
      body: JSON.stringify({
        secretId: state.secretId
      }),
    })
      .then((response) => response.json())
      .then((quizesResponse) => {
        if (quizesResponse?.length) {
          setQuizes(quizesResponse);
          console.log(quizes)
        }
      })
      .catch((e) => console.log(e));
  }

  return (
    <List divided relaxed>
      {quizes.map((quiz) => (
        <List.Item>
          <List.Icon name='file alternate outline' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>{quiz.description}</List.Header>
            <List.Description as='a'>{quiz.functionParams}</List.Description>
            <List.Description as='a'>{quiz.expectedOutput}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  )
}

export default Profile;





