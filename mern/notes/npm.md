1. version
   ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.

2. multitask  
   Use && (double ampersand) for sequential execution. and Use & (single ampersand) for parallel execution.

3. package.json config
   "config": {
   "server": {
   "url": "http://loaclhost:4000",
   "db": "**json_server_mock**/db.json"
   }
   },

   $npm_package_config_server_db as script parameter
