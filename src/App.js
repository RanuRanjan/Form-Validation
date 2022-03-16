import Forms from './components/Forms';
import  {Update}  from './components/Update';
import {View} from "./components/View.jsx"

import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import { UserApplication } from './components/UserApplication';
import { Show } from './components/Show';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/">
          <Forms/>
          </Route>
        <Route exact path="/data">
        
      <Show/>
          </Route>

            
          <Route exact path="/edit/:id" component={Update}/> 
          <Route exact path="/view/:id" component={View}/> 
         




      </Switch>
          
    </div>
  );
}

export default App;
