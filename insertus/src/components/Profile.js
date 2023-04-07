import React from "react";
import { Button } from "react-bootstrap";
import ChangePassword from "./ChangePassword";
import { useState } from "react";

function Profile({ user }) {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <div className="profile-container">
      <h1 className="yell margin">PROFILE</h1>
      <h3 className="margin">Email: {user.email}</h3>
      <Button
        style={{ marginBottom: "20px" }}
        variant="primary"
        onClick={() => setShowChangePassword(true)}
      >
        Change Password
      </Button>
      {showChangePassword && <ChangePassword />}
    </div>
  );
}

export default Profile;
