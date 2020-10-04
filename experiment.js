const { getAuthWhenUsingDangerJSApp, getCustomAppAuthFromEnv } = require('danger/distribution/platforms/github/comms/checksCommenter');

const custom = process.env.DANGER_JS_APP_INSTALL_ID ? getAuthWhenUsingDangerJSApp() : getCustomAppAuthFromEnv();

console.log("INFO", custom);
