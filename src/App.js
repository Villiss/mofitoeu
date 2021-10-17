import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GolfPerformanceEnergyBars from "./pages/GolfPerformanceEnergyBars";
import NutritionTips from "./pages/NutritionTips";
import AboutUs from "./pages/AboutUs";
import Trade from "./pages/Trade";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/golfperformanceenergybar' component={GolfPerformanceEnergyBars} />
        <Route path='/nutritiontips' component={NutritionTips} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/trade' component={Trade} />
        <Route path='/contact' component={Contact} />
        <Route path='/order' component={Order} />
      </Switch>
    </Router>
  );
}

export default App;
