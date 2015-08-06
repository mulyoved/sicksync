var program = require('commander'),
    package = require('./package.json');

// Inject our commands
require('./commands/index.js')(program);

program
    .version(package.version)
    .usage('<command> [options]')
    .parse(process.argv);
