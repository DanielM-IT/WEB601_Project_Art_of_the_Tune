import React from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/pages/Home'
import Support from './Components/pages/Support'
import MyAccount from './Components/pages/MyAccount'
import Default from './Components/pages/Default'
import BrowseMusic from './Components/pages/BrowseMusic'
import Footer from './Components/Footer'
import Login from './Components/pages/Login'
import SignUp from './Components/pages/SignUp'
import MyMusic from './Components/pages/MyMusic'
import UploadMusic from './Components/pages/UploadMusic'


const App = () => (
  <div className="container">
        <div className="header">
          <Navbar />

        </div>
        <div className="body"> 
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/BrowseMusic" component={BrowseMusic} />
              <Route path="/Support" component={Support} />
              <Route path="/Login" component={Login} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/MyAccount" component={MyAccount} />
              <Route path="/MyMusic" component={MyMusic} />
              <Route path="/UploadMusic" component={UploadMusic} />
              <Route component={Default} />
            </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
)  


export default App;



