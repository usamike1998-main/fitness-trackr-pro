import { Routes, Route, useNavigate } from "react-router";

import Layout from "./layout/Layout";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import ActivityDetails from "./activities/ActivityDetails";

import Error404 from "./Error404.jsx";

export default function App() {
  const navigate = useNavigate();
  function toActivities() {
    navigate("/activities");
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />

        <Route
          path="/register"
          element={<Register onSuccess={toActivities} />}
        />
        <Route path="/login" element={<Login onSuccess={toActivities} />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
