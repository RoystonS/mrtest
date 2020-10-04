export const getCustomAppAuthFromEnv = () => {
    const appID = process.env.DANGER_GITHUB_APP_ID || process.env.PERIL_INTEGRATION_ID
    const key = process.env.DANGER_GITHUB_APP_PRIVATE_SIGNING_KEY || process.env.PRIVATE_GITHUB_SIGNING_KEY
    const installID = process.env.DANGER_GITHUB_APP_INSTALL_ID || process.env.PERIL_ORG_INSTALLATION_ID
  
    return {
      appID,
      key,
      installID,
    }
  }

const custom = process.env.DANGER_JS_APP_INSTALL_ID ? getAuthWhenUsingDangerJSApp() : getCustomAppAuthFromEnv();

console.log("INFO", custom);
