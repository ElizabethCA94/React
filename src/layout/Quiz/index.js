import React, { useState } from 'react';
import './Quiz.css';

export default function Quiz(props) {
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
    <div class="ss-quiz">
      <div>
        <b>Pregunta </b>
        <span>{props.question}</span>
      </div>
      <div>
        <b>Parámetros de la función </b>
        <span>{props.functionParams}</span>
      </div>
      <div>
        <b>Resultado esperado </b>
        <span>{props.result}</span>
      </div>

      <div class="ss-user-code">
        <div class="ss-user-code__function-start"> function miFuncion({props.functionParams}) {'{'}</div>
        <textarea class="ss-user-code__textarea" rows={'8'} cols={'90'} value={userCode} onChange={onUserCodeChange}></textarea>
        <div class="ss-user-code__function-end">{'}'}</div>
      </div>

      <button onClick={onCheckCodeButtonClick}>Verificar mi Código</button>
      <div>
        <b className={`ss-quiz__result--${status}` }>
          {result}
        </b>
      </div>

    </div>
  )
}

