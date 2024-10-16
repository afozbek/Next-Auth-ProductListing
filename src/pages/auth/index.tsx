import { useSession } from "next-auth/react";
import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Auth = () => {
  const { data: session } = useSession();

  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  console.log({ session });

  return (
    <div className="auth-page">
      <div className="container">
        AUTH PAGE
        <InputGroup className="mb-3">
          <InputGroup.Text id="addon">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon"
            value={username}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="addon">*</InputGroup.Text>
          <Form.Control
            placeholder="Password"
            aria-label="Username"
            aria-describedby="addon"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default Auth;
