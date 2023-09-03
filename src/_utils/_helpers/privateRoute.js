import { Navigate } from "react-router-dom";
import { history } from "_utils/_helpers";
import { DB } from "_utils/dummy_storage";

const PrivateRoute = ({ children }) => {
  const { user } = DB;

  if (!user) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  // return child components as authorized
  return children;
};

export default PrivateRoute;
