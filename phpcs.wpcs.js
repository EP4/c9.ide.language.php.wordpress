// @see https://cloud9-sdk.readme.io/docs/language-handlers
define(function(require, exports, module) {
    main.consumes = ["Plugin", "language", "ui"];
    main.provides = ["phpcs.wpcs"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        
        /***** Initialization *****/
        var plugin = new Plugin("EP4.com", main.consumes);
        var language = imports.language;
        var emit = plugin.getEmitter();
        var ui = imports.ui;

        function load() {
            var path = options.packagePath.substr(0, options.packagePath.lastIndexOf("/"));
            
            // Load PHPCS
            language.registerLanguageHandler(
                path + "/worker/phpcs_handler",
                function(err, handler) {
                    if (err) return err;
                    // send/receive events using handler.emit/on
                },
                plugin
            );
            
            // Load custom CSS stylesheet.
            ui.insertCss(require("text!./style.css"), options.staticPrefix, plugin);
        }
        
        /***** Methods *****/
        
        
        
        /***** Lifecycle *****/
        
        plugin.on("load", function() {
           load();
        });
        plugin.on("unload", function() {
        
        });
        
        /***** Register and define API *****/
        
        plugin.freezePublicAPI({
            
        });
        
        register(null, {
            "phpcs.wpcs": plugin
        });
    }
});