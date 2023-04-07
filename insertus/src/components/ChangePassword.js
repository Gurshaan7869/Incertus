import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
      );

      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);
      setSuccess(true);
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-form-container px400">
      <h2 className="yell">Change Password</h2>
      <Form onSubmit={handleChangePassword}>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && (
          <Alert variant="success">Your password has been changed.</Alert>
        )}
        <Form.Group controlId="currentPassword">
          <Form.Control
            placeholder="Current Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="newPassword">
          <Form.Control
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Control
            placeholder="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}

export default ChangePassword;
