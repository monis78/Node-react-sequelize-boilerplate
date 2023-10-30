const GOOGLE_CLIENT_ID =
  "client_id.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "secret_key_from_google_console";
const VALIDATE_GOOGLE_ACCESS_TOKEN =
  "https://oauth2.googleapis.com/tokeninfo?id_token=";

const JWT_SECRET_TOKEN_KEY = "RandomCharacterToLockToken";
module.exports = {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  VALIDATE_GOOGLE_ACCESS_TOKEN,
  JWT_SECRET_TOKEN_KEY,
};
