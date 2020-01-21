/*LOADER
	source = "var BuildConfig=" + JSON.stringify(variables.buildConfig);
*/
var BuildConfig = (function() {
	var readConfig = Loader.require("./tools/readConfig.js");
	var config = readConfig(Loader.readFile("./buildinfo.txt"));
	config.variants = "debug";
	config.publishTime = Date.now();
	config.licenceUpdate = "1970/1/1";
	return config;
})();