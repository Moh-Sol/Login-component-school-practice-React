import './App.css';
import { Route, Switch } from 'react-router-dom';
import Account from './components/account';
import { useHistory } from 'react-router-dom';



function App() {

  const history = useHistory();
  history.push('/registration')

  return (
    <div className="App">
      <h2 className='welcome'>Välkommen!</h2>

      <Switch>
        <Route path="/registration" component={Account} />
        <Route path="/account" component={Account} />
      </Switch>
    </div>
  );
}

export default App;



