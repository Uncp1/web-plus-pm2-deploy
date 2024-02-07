const dontenv = require("dotenv");
dontenv.config({ path: "./.env.deploy" });

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPO, DEPLOY_REF } =
  process.env;

module.exports = {
  apps: [
    {
      name: "mesto",
      script: "dist/app.js",
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      "post-deploy": "cd frontend && pwd && npm i && npm run build",
    },
  },
};
