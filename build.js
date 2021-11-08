'use strict';

// Pull in our modules
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');

// Text + chalk definitions
const data = {
    name: chalk.white.bold('                    ATTILA BUTI'),

    label: {
        work: chalk.white.bold('       Work:'),
        github: chalk.white.bold('     GitHub:'),
        linkedin: chalk.white.bold('   LinkedIn:'),
        web: chalk.white.bold('        Web:'),
        email: chalk.white.bold('      Email:'),
        card: chalk.white.bold('       Card:')
    },

    work: chalk.white('Software Developer'),
    github: chalk.cyan('https://github.com/attilabuti'),
    linkedin: chalk.cyan('https://linkedin.com/in/attilabuti'),
    web: chalk.cyan('https://attilabuti.com'),
    email: chalk.cyan('hello@attilabuti.com'),

    card: {
        npx: chalk.white('npx attilabuti'),
        curl: chalk.white('              curl -L attilabuti.com/card')
    }
};

const banner = chalk.cyanBright(require('./art/banner'));
const hr = chalk.grey('-----------~~~~~~~~~===========~~~~~~~~------------');
const nl = '\n';

// Put all our output together into a single variable so we can use boxen effectively
const output = [
    banner,
    `${hr}${nl}${data.name}${nl}${hr}`,
    `${nl}${data.label.work}  ${data.work}${nl}`,
    `${data.label.github}  ${data.github}`,
    `${data.label.linkedin}  ${data.linkedin}`,
    `${data.label.web}  ${data.web}`,
    `${data.label.email}  ${data.email}`,
    `${nl}${data.label.card}  ${data.card.npx}${nl}${data.card.curl}`,
].join(nl);

fs.writeFileSync(
    path.join(__dirname, 'bin/output'),
    chalk.grey(boxen(output, {
        padding: 1,
        margin: 0,
        borderStyle: 'classic'
    }))
);