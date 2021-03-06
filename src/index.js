import program from 'commander';
import { version } from '../package.json';
import { getConfig, printLogo } from './util';
import generateCommands from './commands';

let config = getConfig();

generateCommands(program, config);

function SickSync() {
    program
        .version(version)
        .usage('<command> [options]')
        .parse(process.argv);

    // Run help if no command is provided
    if (!process.argv.slice(2).length) {
        printLogo();
        program.outputHelp();
    }
};

export default SickSync;
