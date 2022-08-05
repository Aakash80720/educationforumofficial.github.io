import './App.css';
import {BrowserRouter,Router, Route, Switch} from 'react-router-dom'
import Body from './Body';
import Navbar from './Navbar';
import Post from './Post';
import createHistory from 'history/createBrowserHistory'
import Login from './Login';
import Sidebar from './Sidebar';
import Base from './Base';
import Send from './Send';
import { useDispatch, useSelector } from 'react-redux';
import Select from './Select';
import { login, selectUser } from './user';
import { useEffect } from 'react';
import { auth } from './firebase';


function App() {
  const history = createHistory();
  const user = useSelector(selectUser)
  return (
    <div>
        {
        !user ?(
          <Login/>
        ):(
          <Router history = {history}>
            <div className="app">
                <Navbar/>
                <Switch>
                    <Route path = "/Post" component = {Post}/>
                    <Route path ="/reply" component = {Send} />
                </Switch>
                <div className='home'>
                  <Sidebar/>
                  <Switch>
                    <Route path ="/Subjects/:roomId" component = {Base} />
                    <Route path="/" component = {Body} exact/>       
                    <Route path="/query" component={Select}/>
                  </Switch>
                </div>
            </div>
          </Router>
        )
      }
    </div>
  );
}
// {
//         !user ?(
//           <Login/>
//         ):(
          
//         )
//       }
export default App;
