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
import { useTranslation } from "react-i18next";


function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path={t('url_golfperformanceenergybar')} component={GolfPerformanceEnergyBars} />
        <Route path={t('url_basics')} component={Basics} />
        <Route path={t('url_nutritiontips')} component={NutritionTips} />
        <Route path={t('url_aboutus')} component={AboutUs} />
        <Route path={t('url_trade')} component={Trade} />
        <Route path={t('url_contact')} component={Contact} />
        <Route path={t('url_nineholesafternoon')} component={NineHolesAfternoon} />
        <Route path={t('url_eighteenmorning')} component={EighteenHolesMorning} />
        <Route path={t('url_eighteenafternoon')} component={EighteenHolesAfternoon} />
        <Route path={t('url_corporate27')} component={Corporate27} />
        <Route path={t('url_corporate36')} component={Corporate36} />
        <Route path={t('url_chocolateorange')} component={ChocolateOrange} />
        <Route path={t('url_applecinnamon')} component={AppleCinnamon} />
        <Route path={t('url_chocolatetoffee')} component={ChocolateToffee} />
        <Route path={t('url_fuitsoats')} component={FruitsOats} />
        <Route path={t('url_superberry')} component={Superberry} />
        <Route path={t('url_whitechocolatestrawberry')} component={WhiteChocolateStrawberry} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
