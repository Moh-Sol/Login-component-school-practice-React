import './App.css';
import { Route, Switch } from 'react-router-dom';
import Account from './components/account';
import { useHistory } from 'react-router-dom';



function App() {

  const history = useHistory();
  history.push('/registration')

  return (
    <div className="App">
      <h2>Välkommen!</h2>

      <Switch>
        <Route path="/registration" component={Account} />
        <Route path="/account" component={Account} />
      </Switch>
    </div>
  );
}

export default App;


/*
-när jag klickar på sign me up jag ska skicka value från form till reducer .

-den ska också flytta oss till path account

- som  ska visar samma kompnenet men ska ändra input text till read-only . och ska ändra value i button till Ändra .

-när ska jag klicka på ändra jag ska toggla med css class så att man kan skriva igen i de input i form och sedan ändra value i input button till spara

- när ska klicka på spara ska byta value igen till spara och låsa igen form fälterna .




problem :
 att den ska börja alltid med path registration










*/