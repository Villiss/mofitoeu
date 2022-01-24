import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GolfPerformanceEnergyBars from "./pages/GolfPerformanceEnergyBars";
import NutritionTips from "./pages/Nutrition Tips/NutritionTips";
import AboutUs from "./pages/About/AboutUs";
import Trade from "./pages/Trade/Trade";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Basics from "./pages/Nutrition Tips/Basics";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/golfperformanceenergybar' component={GolfPerformanceEnergyBars} />
        <Route path='/basics' component={Basics} />
        <Route path='/nutritiontips' component={NutritionTips} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/trade' component={Trade} />
        <Route path='/contact' component={Contact} />
        <Route path='/order' component={Order} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
