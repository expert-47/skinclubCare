import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import { MAIN_ROUTES } from "_utils/_constants";
import { history, PrivateRoute, newUUID } from "_utils/_helpers";
import ThemeProvider from "_utils/_theme";
import Header from "_components/Header";
import MainContent from "MainContent";
import SideNavBar from "_components/SideNavBar";

function App() {
  // init custom history object to allow navigation from anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  const [showSideBar, setShowSideBar] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("token");
    if (isVerified === "verified") {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn && window.innerWidth > 760) {
      setShowSideBar(true);
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <ThemeProvider>
        <Routes>
          {MAIN_ROUTES.map(
            ({ id, path, secured, component, header, footer }) => (
              <Route
                key={id}
                exact
                path={path}
                element={
                  <>
                    {header && (
                      <Header
                        secured={secured}
                        showToggleButton={false}
                        toggleSideBar={() => setShowSideBar(!showSideBar)}
                      />
                    )}
                    {
                      <MainContent>
                        {secured && path !== "/not-found" && (
                          <SideNavBar open={showSideBar} />
                        )}
                        {secured ? (
                          <PrivateRoute>{component} </PrivateRoute>
                        ) : (
                          component
                        )}
                      </MainContent>
                    }
                    {/* {footer && <StickyFooter />} */}
                  </>
                }
              />
            )
          )}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
