/*
 * View model for OctoPrint-Me3d-navbar
 *
 * Author: Richard Weissel
 * License: AGPLv3
 */
$(function() {
    function Me3d-navbarViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        Me3d-navbarViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_me3d-navbar, #tab_plugin_me3d-navbar, ...
        [ /* ... */ ]
    ]);
});
