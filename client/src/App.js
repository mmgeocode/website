import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainIndex from './components/main-section/MainIndex';
import MainHeader from './components/header-section/MainHeader';
import MainFooter from './components/footer-section/MainFooter';
import NavigationBar from './components/navigation-section/NavigationBar';
import Learning from './components/main-section/Learning';
import About from './components/main-section/About';
import Projects from './components/main-section/Projects';

function App() {
  return (
    <div>
      <NavigationBar />
      <MainHeader />
      <Routes>
        <Route path='/' element={<MainIndex/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/learning' element={<Learning/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
