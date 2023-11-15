import "./App.css";
import AppRoutes from "./Routes/Routes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "./config/config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ToastContainer></ToastContainer>
      <AppRoutes />
    </GoogleOAuthProvider>
  );
}

export default App;
