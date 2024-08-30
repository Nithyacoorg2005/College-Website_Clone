import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Hero/Herosection';
import Section1 from './Components/Sections/Section1';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonals from './Components/Testimonals/Testimonals';
import Contact from './Components/Contact/Contact';
export default function App(){
  return<>
<Navbar/>
<Herosection/>
<Title subtitle="OUR PROGRAMS"Title='What We Offer'/>
<Section1/>
<About/>
<Title subtitle="OUR GALLERY"Title='Campus Photos'/>
<Campus/>
<Title subtitle="TESTIMONALS"Title='What Student Says'/>
<Testimonals/>
<Title subtitle="CONTACT US"Title='Get in Touch'/>
<Contact/>

  </>
}

