import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Context from "../../store/context";
//import './index.css';


const CreateQuizUI = () => {
  const { state } = useContext(Context); // global variable
  
  const [description, setdescription] = useState('');
  const [functionParams, setfuctionParams] = useState('');
  const [expectedOutput, setexpectedOutput] = useState('');

  const handleDescriptionChange = (e) => {
    setdescription(e.target.value)
  }

  const handleFuctionParamsChange = (e) => {
    setfuctionParams(e.target.value)
  }

  const handleExpectedOutputChange = (e) => {
    setexpectedOutput(e.target.value)
  }
  
  const onSubmit = async () => {
    await fetch('http://localhost:4000/dev/createQuiz', {
      method: 'post',
      body: JSON.stringify({
        description,
        functionParams,
        expectedOutput,
        userSecretId: state.secretId
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => data)
      .catch(e => console.log(e))

  }

  return (
    <div class="ui form">
      <h1>Crear Quiz</h1>
      <div class="lf-register-form">
        <Form onSubmit = {onSubmit}>
          <Form.Field>
            <div class="ui form success">
              <div class="field">
                <label>Enunciado</label>
                <textarea value = {description} onChange = {handleDescriptionChange} type="form-textarea-control-opinion"/>
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <label>Parámetros de la función</label>
            <input value = {functionParams} onChange = {handleFuctionParamsChange} type="form-input-control-opinion" />
          </Form.Field>
          <Form.Field>
            <label>Respuesta esperada</label>
            <input value = {expectedOutput} onChange = {handleExpectedOutputChange} type="form-input-control-opinion" />
          </Form.Field>
          <Button type="ui submit button">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateQuizUI;