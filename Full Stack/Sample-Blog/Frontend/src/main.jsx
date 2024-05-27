import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "../Auth/AuthContext.jsx";
// import { UserBlogProvider } from "..Auth/UserBlogsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <UserBlogProvider> */}
        <App />
      {/* </UserBlogProvider> */}
    </AuthProvider>
  </React.StrictMode>
);
