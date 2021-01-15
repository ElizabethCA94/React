import logo from './logo.svg';
import './App.css';

function getButtonText(){
  return 'clickMe!'
}

//create react component
const buttonText = 'TextMe!';
const App = () => {
  return (
    <div>
        <label class="label" for="name">
          Enter name:
        </label>
        <input id="name"></input>
  <button style = {{ backgroundColor:'blue', color:'white' }}>{getButtonText()}</button>
    </div>
  );
}

export default App;
