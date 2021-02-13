import React, { useContext, setState } from 'react';
import { List } from 'semantic-ui-react';
import Context from "../../store/context";

const Profile = () => {
  const { state } = useContext(Context);
  let quizes = [];

  // const quizesResponse = await fetch("http://localhost:4000/dev/listQuiz", {
  //   method: "post",
  //   body: JSON.stringify({
  //     secretId: state.secretId
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => data)
  //   .catch((e) => console.log(e));

  // if (quizesResponse.length) {
  //   quizes = quizesResponse;
  // }

  return (
    <List divided relaxed>
      <List.Item>
        <List.Icon name='file alternate outline' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
          <List.Description as='a'>Updated 10 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='file alternate outline' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
          <List.Description as='a'>Updated 22 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='file alternate outline' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
          <List.Description as='a'>Updated 34 mins ago</List.Description>
        </List.Content>
      </List.Item>
    </List>
  )
}

export default Profile;





