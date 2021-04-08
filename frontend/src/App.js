import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ServicesPage from "./components/ServicesPage/Services"
import ContactPage from "./components/Contact/ContactUs"
import AreasPage from "./components/Areas/Areas"
import TestimonialsPage from "./components/Testimonials/Testimonials"
import AboutPage from "./components/AboutUsPage/AboutUs"


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/areas">
            <AreasPage />
          </Route>
          <Route path="/testimonials">
            <TestimonialsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
