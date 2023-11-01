import "./App.css";
import AppRoutes from "./Routes/Routes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "./config/config";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID} >
      <AppRoutes />
    </GoogleOAuthProvider>
  );
}

export default App;
