import './App.css';
//import Quiz from "./components/Quiz";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './routes';
import 'semantic-ui-css/semantic.min.css';
import GlobalProvider from './context/Provider';

/*function getButtonText(){
  return 'clickMe!'
}*/

//create react component

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Switch>
            {routes.map((route, index) => (
                <Route 
                path = {route.path}
                exact 
                render = {(props) => <route.component/>}        
                ></Route>
            ))}  
            </Switch>
        </Router>
      </GlobalProvider> 
    </div>
    
    /*<div>
      <Quiz
        question={'Escribe una función que retorne las palabras "hola mundo"'}
        functionParams={''}
        result={'hola mundo'}
      ></Quiz>
      <Quiz
        question={'Tu parámetro de entrada es 5, haz que la función retorne un 6 (a + 1)'}
        functionParams={'a = 5'}
        result={6}
      ></Quiz>
      <Quiz
        question={'Tu primer parámetro de entrada es 6 y tu segundo parámetro es 7, haz que la función retorne un 13 (a + b)'}
        functionParams={'a = 6 , b = 7'}
        result={13}
      ></Quiz>
      <Quiz
        question={'Tu parámetro de entrada es 5, haz que la función retorne un 6 (a + 1)'}
        functionParams={'a = 5'}
        result={6}
      ></Quiz>
    </div>*/
  );
}

export default App;
