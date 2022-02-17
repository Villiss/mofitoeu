import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GolfPerformanceEnergyBars from "./pages/GolfPerformanceEnergyBars/GolfPerformanceEnergyBars";
import NutritionTips from "./pages/Nutrition Tips/NutritionTips";
import AboutUs from "./pages/About/AboutUs";
import Trade from "./pages/Trade/Trade";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Basics from "./pages/Nutrition Tips/Basics";
import Footer from "./components/Footer";
import './App.css'
import NineHolesAfternoon from "./pages/Nutrition Tips/NineHolesAfternoon";
import EighteenHolesMorning from "./pages/Nutrition Tips/EighteenHolesMorning";
import EighteenHolesAfternoon from "./pages/Nutrition Tips/EighteenHolesAfternoon";
import Corporate27 from "./pages/Nutrition Tips/Corporate27";
import Corporate36 from "./pages/Nutrition Tips/Corporate36";
import ChocolateOrange from "./pages/GolfPerformanceEnergyBars/ChocolateOrange";
import AppleCinnamon from "./pages/GolfPerformanceEnergyBars/AppleCinnamon";
import ChocolateToffee from "./pages/GolfPerformanceEnergyBars/ChocolateToffee";
import FruitsOats from "./pages/GolfPerformanceEnergyBars/FruitsOats";
import Superberry from "./pages/GolfPerformanceEnergyBars/Superberry";
import WhiteChocolateStrawberry from "./pages/GolfPerformanceEnergyBars/WhiteChocolateStrawberry";
import ScrollToTop from './pages/ScrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/golfperformanceenergybar' component={GolfPerformanceEnergyBars} />
          <Route path='/basics' component={Basics} />
          <Route path='/nutritiontips' component={NutritionTips} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/trade' component={Trade} />
          <Route path='/contact' component={Contact} />
          <Route path='/nineholesafternoon' component={NineHolesAfternoon} />
          <Route path='/eighteenmorning' component={EighteenHolesMorning} />
          <Route path='/eighteenafternoon' component={EighteenHolesAfternoon} />
          <Route path='/corporate27' component={Corporate27} />
          <Route path='/corporate36' component={Corporate36} />
          <Route path='/chocolateorange' component={ChocolateOrange} />
          <Route path='/applecinnamon' component={AppleCinnamon} />
          <Route path='/chocolatetoffee' component={ChocolateToffee} />
          <Route path='/fuitsoats' component={FruitsOats} />
          <Route path='/superberry' component={Superberry} />
          <Route path='/whitechocolatestrawberry' component={WhiteChocolateStrawberry} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
