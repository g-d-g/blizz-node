const genid = require("node-genid");

module.exports = function() {
	return (new Date().getTime() + "-" + genid(25));
};