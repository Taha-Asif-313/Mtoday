import {
  ReactSignedIn,
  ReactSignedOut,
  ReactUserProfile,
} from "@neuctra/authix";
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ReactSignedIn>
        <ReactUserProfile />
      </ReactSignedIn>
   
    </>
  );
};

export default ProfilePage;
