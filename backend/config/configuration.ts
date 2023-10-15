export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 8080,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  MONGODB_URI: process.env.MONGODB_URI,
});
