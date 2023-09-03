import React, { useEffect } from "react";

import "./index.css";
import LoginForm from "LoginForm";
import { history, newUUID } from "_utils/_helpers";
import { ButtonWithIcon } from "_components";
import KeyValueText from "_components/KeyValueText";
import AppointmentCard from "_components/AppointmentCard";

function Dashboard({ children }) {
  useEffect(() => {
    if (localStorage.getItem("token") !== "verified") {
      history.navigate("/login");
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="landing-top-bar">
        <div className="welcome-note">
          <h1 className="greetings"> Welcome Jane </h1>
          <span className="note">Check the latest updates on your account</span>
        </div>
        <div className="support-buttons">
          <ButtonWithIcon
            label={"Support & FAQs"}
            sx={{
              minWidth: "fit-content",
              text: { textAlign: "center" },
            }}
          />
          <ButtonWithIcon
            label={"Book an appointment"}
            sx={{
              backgroundColor: "#000",
              text: { textAlign: "center", color: "#fff" },
            }}
          />
        </div>
      </div>
      <div className="update-cards-bar">
        {[
          {
            heading: "Ongoing Treatment",
            content: "PRP Injections",
            contentDescription: (
              <KeyValueText keyText={"Start Date"} value={"31 July, 2023"} />
            ),
            footerContent: <KeyValueText />,
            backgroundColor: "#e1d0c1",
          },
          {
            heading: "Upcoming Appointment",
            content: "25 Aug, 2023",
            contentDescription: (
              <KeyValueText keyText={"At"} value={"12:00 PM"} />
            ),
            footerContent: <KeyValueText />,
            backgroundColor: "#C2D5DC",
          },
          {
            heading: "Recent Payment",
            content: "$350.00",
            contentDescription: <KeyValueText />,
            footerContent: <KeyValueText />,
            backgroundColor: "#fff",
          },
        ].map(
          ({
            heading,
            content,
            contentDescription,
            footerContent,
            backgroundColor,
          }) => (
            <AppointmentCard
              key={newUUID()}
              heading={heading}
              content={content}
              contentDescription={contentDescription}
              footerContent={footerContent}
              sx={{ flex: 1, width: 'auto', backgroundColor: backgroundColor }}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Dashboard;
