import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Header from './pages/components/Header';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import QuanLySV from './pages/QuanLySV';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/qlsv" component={QuanLySV}/>
            <Route exact path="/" component={QuanLySV}/>
        </Switch>

    </BrowserRouter>
  );
}

export default App;
