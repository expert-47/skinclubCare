import Dashboard from "Dashboard";
import ForgotPassword from "ForgotPassword";
import LoginForm from "LoginForm";
import OnboardingForm from "OnboardingForm";
import ResetPassword from "ResetPassword";
import NotFound from "_errors/NotFound";
import { newUUID } from "_utils/_helpers";

export const NAVIGATIONS = [
  {
    id: newUUID(),
    label: "Overview",
    route: "/",
  },
  {
    id: newUUID(),
    label: "Profile",
    route: "/profile",
  },
  {
    id: newUUID(),
    label: "Appointments",
    route: "/appointments",
  },
  {
    id: newUUID(),
    label: "History",
    nested: true,
    nestedNavigations: [
      {
        id: newUUID(),
        label: "Videos",
        route: "/videos",
      },
      {
        id: newUUID(),
        label: "Video Library",
        route: "/video-library",
      },
    ],
  },
  {
    id: newUUID(),
    label: "Messages",
    route: "/messages",
  },
  {
    id: newUUID(),
    label: "Support",
    nested: true,
    nestedNavigations: [
      {
        id: newUUID(),
        label: "FAQs",
        route: "/",
      },
      {
        id: newUUID(),
        label: "Procedure Information",
        route: "/procedure",
      },
    ],
  },
  {
    id: newUUID(),
    label: "Aftercare",
    nested: true,
    nestedNavigations: [
      {
        id: newUUID(),
        label: "Quizzes",
        route: "/quizzes",
      },
      {
        id: newUUID(),
        label: "Health & Skin Assessment",
        route: "/assessments",
      },
    ],
  },
  {
    id: newUUID(),
    label: "Finances",
    route: "/finnaces",
  },
  {
    id: newUUID(),
    label: "Virtual Consultation",
    route: "/consultations",
  },
];

export const MAIN_ROUTES = [
  {
    id: newUUID(),
    path: "/login",
    secured: false,
    header: true,
    footer: true,
    component: <LoginForm />,
  },
  {
    id: newUUID(),
    path: "/signup",
    secured: false,
    header: true,
    footer: true,
    component: <OnboardingForm />,
  },
  {
    id: newUUID(),
    path: "/forgot-password",
    secured: false,
    header: true,
    footer: true,
    component: <ForgotPassword />,
  },
  {
    id: newUUID(),
    path: "/reset-password",
    secured: false,
    header: true,
    footer: true,
    component: <ResetPassword />,
  },
  {
    id: newUUID(),
    path: "/not-found",
    secured: false,
    header: true,
    footer: true,
    component: <NotFound />,
  },
  {
    id: newUUID(),
    path: "/",
    secured: true,
    header: true,
    footer: true,
    component: <Dashboard />,
  },
];

export const findAllRouteIdByRoutePath = (
  data = [],
  route,
  parentRouteId = null
) => {
  const matchingIds = [];

  for (const item of data) {
    if (item.route === route) {
      matchingIds.push(parentRouteId || item.id); // Add the ID to the array
    } else if (item.nested && item.nestedNavigations) {
      // Check nested items recursively, passing the parent's ID
      matchingIds.push(
        ...findAllRouteIdByRoutePath(item.nestedNavigations, route, item.id)
      ); // Add matching IDs to the array
    }
  }

  return matchingIds;
};
