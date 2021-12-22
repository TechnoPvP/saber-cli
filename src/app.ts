#! /usr/bin/env node

import chalk from 'chalk';
import { program, Command, CommandOptions } from 'commander';
import inquirer, { PromptModule, QuestionCollection } from 'inquirer';
import degit from 'degit';
import { execFileSync } from 'child_process';
import { unlink } from 'fs';

const emitter = degit('TechnoPvP/notherbp', {
  cache: false,
  force: true,
  verbose: false,
  mode: 'tar',
});

emitter.on('info', async function (info) {
  console.log(info.message);
  unlink('./repo/te', (file) => {
    console.log(file);
  })
});
program.version('0.0.1');

program
  .option('-d, --debug', 'Output extra debugging')
  .option('-n, --node', 'Node backend')
  .option('-f, --frontend <type>', 'Frontend');

program
  .command('run <path>')
  .description('run the bs strap mf')
  .action(async path => {
    emitter.remove('./repo', './please', { action: 'remove', files: ['work.js'] });
    console.log(chalk.magenta('Cloning: ') + `github repo into ` + chalk.blue(path));
    await emitter.clone(path);
  });

const choices = ['Services', 'Controllors', 'Repos'];
const questions: QuestionCollection = [
  {
    type: 'checkbox',
    name: 'checkbox',
    message: 'What checkbox do you want to use?',
    choices: choices.map(val => {
      return { name: val, extra: 'adam' };
    }),
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'What confirmation do you want?',
    suffix: ' (y)',
  },
  {
    type: 'list',
    name: 'list',
    message: ' What list do you want?',
    choices: ['NestJS', 'Express', 'Fastify'],
  },
  {
    type: 'rawlist',
    name: 'Any extra needs?',
    message: 'Do you need any other options',
    choices: ['Mongo', 'MVC', 'Framework'],
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about models',
    choices: [
      {
        key: 'p',
        name: 'VSCode',
        value: 'vscode',
      },
      {
        key: 'd',
        name: 'Atom',
        value: 'atom',
      },
    ],
  },
  {
    type: 'editor',
    name: 'comments',
    message: 'Please write your bio',
  },
];

program
  .command('start')
  .description('Start the bootstrap process')
  .action(srouce => {
    inquirer.prompt(questions).then(answer => {
      console.log(answer);
    });
  });

program.parse(process.argv);
