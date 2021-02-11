import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
//import './index.css';


const CreateQuizUI = () => {
  
  const [description, setdescription] = useState('');
  const [fuctionParams, setfuctionParams] = useState('');
  const [expectedOutput, setexpectedOutput] = useState('');
  const userId = '';

  const handleDescriptionChange = (e) => {
    setdescription(e.target.value)
  }

  const handleFuctionParamsChange = (e) => {
    setfuctionParams(e.target.value)
  }

  const handleExpectedOutputChange = (e) => {
    setexpectedOutput(e.target.value)
  }

  const handleUserIdChange = (e) => {
    setuserId(e.target.value)
  }
  
  const onSubmit = async () => {
    await fetch('http://localhost:4000/dev/createQuiz', {
      method: 'post',
      body: JSON.stringify({
        description,
        fuctionParams,
        expectedOutput,
        userId
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
            <label>Cantidad de parámetros</label>
            <input value = {fuctionParams} onChange = {handleFuctionParamsChange} type="form-input-control-opinion" />
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