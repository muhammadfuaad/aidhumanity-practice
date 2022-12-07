import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/Dashboard/dashboard";
import Profile from './pages/Dashboard/profile';
import Change_password from './pages/Dashboard/change_password';
import Fundraising from './pages/Dashboard/fundraising';
import Monthly_donation from './pages/Dashboard/monthly_donations';
import Payment_methods from './pages/Dashboard/payment_methods';
import Preferences from './pages/Dashboard/preferences';
import Donation_history from './pages/Dashboard/donation_history';
import Appeal from './components/appeal';
import Page_view from './pages/Page_Settings/page_view';
import Page_edit from './pages/Page_Settings/page_edit';
import Page_media from './pages/Page_Settings/page_media';
import Page_donations from './pages/Page_Settings/page_donations';
import Page_settings from './pages/Page_Settings/page_settings';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/security" component={Change_password} />
      <Route exact path="/fundraising" component={Fundraising} />
      <Route exact path="/monthly_donations" component={Monthly_donation} />
      <Route exact path="/payment_methods" component={Payment_methods} />
      <Route exact path="/preferences" component={Preferences} />
      <Route exact path="/donation_history" component={Donation_history} />
      <Route exact path="/appeal" component={Appeal} />
      <Route exact path="/page_view" component={Page_view} />
      <Route exact path="/page_edit" component={Page_edit} />
      <Route exact path="/page_media" component={Page_media} />
      <Route exact path="/page_donations" component={Page_donations} />
      <Route exact path="/page_settings" component={Page_settings} />


    </Switch>
    </BrowserRouter>
  );
}

export default App;
