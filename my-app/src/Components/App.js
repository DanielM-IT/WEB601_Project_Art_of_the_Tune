import React from 'react'
import '../App.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Support from './pages/Support'
import MyAccount from './pages/MyAccount'
import Default from './pages/Default'
import BrowseMusic from './pages/BrowseMusic'
import Footer from './Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyMusic from './pages/MyMusic'
import UploadMusic from './pages/UploadMusic'


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
