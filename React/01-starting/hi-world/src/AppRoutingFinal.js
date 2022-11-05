import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/Dashboard/dashboardPage';


function AppRoutingFinal() {

  let loggedIn = true;

  return (
    <Router>
      <div>
          <Routes>
            <Route path='/' element={
              loggedIn
                ? <Navigate to='/dashboard'/>
                : <Navigate to='/login'/>
              } />
            <Route path='/login' element={
              loggedIn
                ? <Navigate to='/dashboard'/>
                : <LoginPage/>
              } />
            <Route path='/dashboard' element={
              loggedIn
                ? <DashboardPage></DashboardPage>
                : <Navigate to='/login'/>
              } />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default AppRoutingFinal;
