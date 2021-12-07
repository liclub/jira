import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "context/auth.context";
import React from "react";
import { UnAuthenticatedApp } from "unauthenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();
  console.log(user)
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
}

export default App;
