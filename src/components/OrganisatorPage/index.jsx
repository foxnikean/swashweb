import React from "react";
import "./OrganisatorPage.scss";
import OrgNav from "./components/orgNav";
import AddEvent from "../AddEvent";
import useAuthentication from "../../services/UseAuthHook";
import OrganisatorLand from "../OrganisatorLanding";
const OrganisatorPage = () => {
  const user = useAuthentication();
  return (
    <>
      <span className='org-header'>Organizatör Özel</span>
      {user ? (
        <OrganisatorLand />
      ) : (
        <div className='flex flex-col'>
          <OrgNav />
          <AddEvent />
        </div>
      )}
    </>
  );
};

export default OrganisatorPage;
