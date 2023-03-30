
import image from "./assets/rectangle1.jpeg"
import './App.css';
import './components/Profile.css';
import  Profile  from './components/Profile';


const App = ()=>{
  return (
    <div className="clapyResets root">
      <Profile fullname="zakaria laasri" bio="ZAkaria ait laasri (Juin 20, 2000) was an Morrocain,I'm web devloper and physicien student.A Web Developer with two years of experience, specializing in HTML5, JavaScript, ReactJs, MySQL, database design,UX & UI desgin,back-end and front-end development. Adept at collaborating with dynamic teams to build high quality websites and identify opportunities to enhance the user experience..." profession="web devloper"> <img src={image} className="Image" alt='zakaria laasri'/> </Profile>
    </div>
  );
};
export default App
