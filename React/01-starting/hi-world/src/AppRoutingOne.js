import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom';
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPages from './pages/about-faqs/AboutPages';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage'
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import MustBeLogged from './components/pure/mustBeLogged';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/statePage';

function AppRoutingOne() {

  let logged = true

  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log("user Logged?", logged)
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link style={{textDecoration: "None"}} to='/'>| | Home |</Link>
          <Link style={{textDecoration: "None"}} to='about'> | About | </Link>
          <Link style={{textDecoration: "None"}} to='faqs'> | Faqs | </Link>
          <Link style={{textDecoration: "None"}} to='404'> | Not Found | | </Link>
          <Link style={{textDecoration: "None", marginLeft: 10}} to='login'> Login </Link>
        </aside>

        <main>
          <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/online-state' element={<StatePage/>}/>
            <Route path='*' element={ <NotFoundPage/> } />
            <Route path='/login' element={logged 
            ? <HomePage/>
            : <LoginPage/>}
            /> 
            <Route path='/about' element={<AboutPages/>} />
            <Route path='/faqs' element={<AboutPages/>} />
            <Route path='/profile' element={ logged 
              ? <ProfilePage/> 
              : <MustBeLogged/>
              }
            />
            <Route path='/tasks' element={<TasksPage/>}/>
            <Route path='/tasks/:id' element={<TasksDetailPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default AppRoutingOne;
