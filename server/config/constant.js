const GOOGLE_CLIENT_ID =
  "741555424430-li4sjlvcc9qjn1tqein8aiiigl2k97up.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const VALIDATE_GOOGLE_ACCESS_TOKEN =
  "https://oauth2.googleapis.com/tokeninfo?id_token=";

const JWT_SECRET_TOKEN_KEY = "RandomCharacterToLockToken";
module.exports = {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  VALIDATE_GOOGLE_ACCESS_TOKEN,
  JWT_SECRET_TOKEN_KEY,
};
