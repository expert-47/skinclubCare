import React, { useEffect, useState } from "react";
import "./index.css";
import { NAVIGATIONS, findAllRouteIdByRoutePath } from "_utils/_constants";
import { history } from "_utils/_helpers";
import { DropdownArrowIcon } from "_utils/_icons";

const SideNavBar = ({ open, sx }) => {
  const [openNestedNavigations, setOpenNestedNavigations] = useState({});

  const { pathname } = history.location;
  const pathways = pathname.split("/");
  pathways.reverse().pop();
  const currentRoute = "/" + (pathways[0] || "");

  const navigateToRoute = (route) => {
    history.navigate(route);
  };
  const toggleDropdown = (key) => {
    setOpenNestedNavigations({
      ...openNestedNavigations,
      [key]: !openNestedNavigations[key],
    });
  };

  useEffect(() => {
    if (currentRoute) {
      const routeIds = findAllRouteIdByRoutePath(NAVIGATIONS, currentRoute);
      const newOpenNavigations = { ...openNestedNavigations };
      routeIds.forEach((routeId) => {
        newOpenNavigations[routeId] = true;
      });
      setOpenNestedNavigations(newOpenNavigations);
    }
  }, [currentRoute]);

  return (
    <div
      className="side-nav-bar"
      style={{ ...sx, display: open ? "block" : "none" }}
    >
      {NAVIGATIONS.map(
        ({ id, label, route = null, nested, nestedNavigations = [] }) => {
          const isRouteActive =
            currentRoute === route ||
            (route === null &&
              nested &&
              nestedNavigations
                .map(({ route }) => route)
                .includes(currentRoute));
          return (
            <div key={id} id={id}>
              <div
                className={`nav ${isRouteActive ? "active" : ""}`}
                onClick={() => {
                  if (nested) {
                    toggleDropdown(id);
                  } else {
                    navigateToRoute(route);
                  }
                }}
              >
                {label}
                {nested && (
                  <DropdownArrowIcon
                    sx={{
                      transform: `rotate(${
                        openNestedNavigations[id] ? 0 : 90
                      }deg)`,
                    }}
                  />
                )}
              </div>
              {nested && (
                <div
                  className={`nested-nav-${
                    openNestedNavigations[id] ? "active" : "none"
                  }`}
                >
                  {nestedNavigations.map((nestedNav) => {
                    return (
                      <div
                        key={nestedNav.id}
                        className={`nav nested-nav ${
                          currentRoute === nestedNav.route ? "active" : ""
                        }`}
                        onClick={() => {
                          navigateToRoute(nestedNav.route);
                        }}
                      >
                        {nestedNav.label}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

export default SideNavBar;
