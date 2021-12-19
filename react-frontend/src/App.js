import logo from './logo.svg';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import LoginComponent from './components/LoginComponent';
import ErrorComponent from './components/ErrorComponent';
import AuthenticatedRoute from './services/AuthenticatedRoute';
import WelcomeComponent from './components/WelcomeComponent';


function App() {
  return (
    <div>
      <Router>
            <HeaderComponent/>
              <div className="container">
               
                <Routes>
                <Route path="/" element = {<LoginComponent/>}></Route>
                  <Route path="/login" element = {<LoginComponent/>}></Route>
                  <Route path="/welcome/:name" element = {<WelcomeComponent/>}></Route>
                  {/* AuthenticationRoute protects the component access if the user is not logged in */}
                  <Route path="/employees" element = {<AuthenticatedRoute><ListEmployeeComponent/></AuthenticatedRoute>}></Route>
                  <Route path="/add-employee/:id" element = {<AuthenticatedRoute><CreateEmployeeComponent/></AuthenticatedRoute>}></Route>
                  {/*<Route path="/update-employee/:id" element = {<UpdateEmployeeComponent/>}></Route>*/}
                  <Route path="/view-employee/:id" element ={<AuthenticatedRoute><ViewEmployeeComponent/></AuthenticatedRoute>}></Route>
                  <Route path="*" element={<ErrorComponent />}></Route>
                  
                </Routes>
                
              </div>
            <FooterComponent/>
        
      </Router>
      
    </div>
  );
}

export default App;
