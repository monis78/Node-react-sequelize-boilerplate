// Do not expose your Neon credentials to the browser
const PG_HOST = "ep-winter-rain-82378574.ap-southeast-1.aws.neon.tech";
const PG_DATABASE = "BLOG_DATA";
const PG_USER = "maazansari113";
const PG_PASSWORD = "v4pwHTayE3fi";
const ENDPOINT_ID = "ep-winter-rain-82378574";

module.exports = {
  host: "ep-winter-rain-82378574.ap-southeast-1.aws.neon.tech",
  database: "BLOG_DATA",
  username: "maazansari113",
  password: "v4pwHTayE3fi",
  port: 5432,
  dialect: "postgres",
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
};
