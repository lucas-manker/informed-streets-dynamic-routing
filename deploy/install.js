const { Service } = require("node-windows");

// Create a new service object
var svc = new Service({
  name: "informed-streets-server",
  description: "IS webserver for dynamic routing",
  script: "build/server.js",
  nodeOptions: ["--harmony", "--max_old_space_size=4096"],
  workingDirectory: ".",
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function () {
  svc.start();
});

svc.install();
