import React from "react";
import UserHeader from "../../components/header/UserHeader";
import CompareTrips from "../../components/user/trips/CompareTrips";

const UserCompareTripsRoute = () => {
  return (
    <div>
      <UserHeader />
      <CompareTrips />
    </div>
  );
};

export default UserCompareTripsRoute;