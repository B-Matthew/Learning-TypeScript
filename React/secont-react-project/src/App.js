import {Route,Switch} from 'react-router-dom';

import NewMeetUp from './pages/NewMeetup';
import AllMeetup from './pages/AllMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>  
      <MainNavigation />
      <Switch>    
        <Route path='/NewMeetUp' exact>
          <NewMeetUp />
        </Route>
        <Route path='/' exact>
          <AllMeetup />
        </Route>
        <Route path='/Favorites' exact>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


/*note

le Route di default sono innestate ossia vengono mostrate tutte quando il path contiene lo stesso elemento, 
di conseguenza con la proprietà switch determiniamo che una sola route venga mostrata in pagina. 
Ulteriore problema che si crea è che con lo switch viene mostrata la prima route che ha un elemento uguale al path in questo caso la prima route che contiene /
usando Exact diciamo allo switch di selezionare la route che ha esattamente quel Path nell'url del nostro progetto

*/