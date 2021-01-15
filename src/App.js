import logo from './logo.svg';
import './App.css';

/*function getButtonText(){
  return 'clickMe!'
}*/

//create react component

const App = () => {
  const buttonText = {text:'TextMe!'};
  const style = { backgroundColor:'blue', color:'white' };
  return (
    <div>
        <label class="label" for="name">
          Enter name:
        </label>
        <input id="name"></input>
  <button style = {style}>{buttonText.text}</button>
    </div>
  );
}

export default App;
