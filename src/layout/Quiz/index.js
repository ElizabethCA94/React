import React, { useState } from 'react';
import './index.css';
import { Form, Button } from 'semantic-ui-react';

export default function QuizUI (props) {
  const [userCode, setUserCode] = useState('return');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState(null);

  const onUserCodeChange = (e) => {
    setUserCode(e.target.value)
  }

  const onCheckCodeButtonClick = () => {
    try {
      // eslint-disable-next-line
      let userFunction = new Function(`return function (${props.functionParams}) { ${userCode} }`)();
      const isOk = userFunction() === props.result
      setResult(isOk ? 'Tu respuesta es correcta' : 'Intenta nuevamente')
      setStatus(isOk ? 'success' : 'warning')
    } catch (error) {
      setResult(error.message)
      setStatus('danger')
    }
  }

  return (
    <div class="ui form">
      <h1>Quiz</h1>
      <div class="lf-quiz-form">
        <Form>
          <Form.Field>
            <div class="ui form success">
              <div class="field">
                <b>Pregunta </b>
                <span>{props.question}</span>
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <div class="ui form success">
              <div class="field">
                <b>Parámetros de la función </b>
                <span>{props.functionParams}</span>
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <div class="ui form success">
              <div class="field">
                <b>Resultado esperado </b>
                <span>{props.result}</span>
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <div class="lf-user-code">
              <div class="lf-user-code__function-start"> function miFuncion({props.functionParams}) {'{'}</div>
              <textarea class="lf-user-code__textarea" rows={'8'} cols={'90'} value={userCode} onChange={onUserCodeChange}></textarea>
              <div class="lf-user-code__function-end">{'}'}</div>
            </div>
          </Form.Field>
          <Button onClick={onCheckCodeButtonClick} type="ui submit button">Verificar mi Código</Button>
          <div>
            <b className={`lf-quiz__result--${status}`}>
              {result}
            </b>
          </div>
        </Form>
      </div>
    </div>
  )
}
