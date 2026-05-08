import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import News from './pages/News/News'
import Courses from './pages/Courses/Courses'
import CourseDetails from './pages/Courses/CourseDetails'
import Campaign from './pages/Campaign/Campaign'
import Media from './pages/Media/Media'
import Promotion from './pages/Promotion/Promotion'
import ContactPage from './pages/CantactPage/CantactPage'
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// User Dashboard Pages
import Dashboard from "./pages/User/Dashboard";
import UserProfile from "./pages/User/UserProfile";
import ApplyGrievance from "./pages/User/ApplyGrievance";
import GrievanceList from "./pages/User/GrievanceList";
import GrievanceDetails from "./pages/User/GrievanceDetails";
import TrackGrievance from "./pages/User/TrackGrievance";
import RegisterForVolunteer from './pages/Auth/RegisterForVolunteer'
import { Schemes } from './pages/Schemes'
import { useEffect } from 'react'
import { SearchPage } from './pages/Schemes/SearchPage'


const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])

  return null;
}


const App = () => {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/courses/:id' element={<CourseDetails/>}></Route>
          <Route path='/campaign' element={<Campaign/>}></Route>
          <Route path='/media' element={<Media/>}></Route>
          <Route path='/promotion' element={<Promotion/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path="/register-for-volunteer" element={<RegisterForVolunteer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        {/* User Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/apply-grievance" element={<ApplyGrievance />} />
          <Route path="/grievances" element={<GrievanceList />} />
          <Route path="/grievance/:id" element={<GrievanceDetails />} />
          <Route path="/track-grievance/:id" element={<TrackGrievance />} />
          <Route path="/atal-kishan-yojana" element={<Schemes />}></Route>
          <Route path='/schemes/search' element={<SearchPage></SearchPage>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
