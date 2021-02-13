import React, { useState, useContext } from "react";
import { Form, Button } from "semantic-ui-react";
import Context from "../../store/context";
//import './index.css';

const EditQuizUI = () => {
  const { state } = useContext(Context); // global variable

  const [description, setdescription] = useState(state.activeQuizDescription);
  const [functionParams, setfuctionParams] = useState(
    state.activeQuizFunctionParams
  );
  const [expectedOutput, setexpectedOutput] = useState(
    state.activeQuizExpectedOutput
  );

  const handleDescriptionChange = (e) => {
    setdescription(e.target.value);
  };

  const handleFuctionParamsChange = (e) => {
    setfuctionParams(e.target.value);
  };

  const handleExpectedOutputChange = (e) => {
    setexpectedOutput(e.target.value);
  };

  const onSubmit = async () => {
    const updateResponse = await fetch("http://localhost:4000/dev/updateQuiz", {
      method: "post",
      body: JSON.stringify({
        description,
        functionParams,
        expectedOutput,
        userSecretId: state.secretId,
        quizId: state.activeQuizId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((e) => console.log(e));
    
    console.log(updateResponse);
  };

  return (
    <div class="ui form">
      <h1>Editar Quiz</h1>
      <div class="lf-register-form">
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <div class="ui form success">
              <div class="field">
                <label>Enunciado</label>
                <textarea
                  value={description}
                  onChange={handleDescriptionChange}
                  type="form-textarea-control-opinion"
                  placeholder="Escribe una función que retorne un 6 (a + b)"
                />
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <label>Parámetros de la función</label>
            <input
              value={functionParams}
              onChange={handleFuctionParamsChange}
              type="form-input-control-opinion"
              placeholder="a = 5, b = 1"
            />
          </Form.Field>
          <Form.Field>
            <label>Respuesta esperada</label>
            <input
              value={expectedOutput}
              onChange={handleExpectedOutputChange}
              type="form-input-control-opinion"
              placeholder="6"
            />
          </Form.Field>
          <Button type="ui submit button">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default EditQuizUI;
