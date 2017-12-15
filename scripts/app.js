/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};

const Router = require("sf-core/ui/router");
const config = require("./settings.json").config;
const themeConfig = config.theme;
const createThemeContextBound = require("@smartface/contx/lib/styling/ThemeContext").createThemeContextBound;
const themeSources = [];

themeConfig.themes.forEach(function(name) {
    themeSources.push({
        name: name,
        rawStyles: require("./themes/" + name),
        isDefault: themeConfig.currentTheme === name
    });
});

Application.theme = createThemeContextBound(themeSources);

// Define routes and go to initial page of application
Router.add("page1", require("./pages/page1"));
Router.add("page2", require("./pages/page2"));
Router.go("page1");
