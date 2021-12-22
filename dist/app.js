#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const degit_1 = __importDefault(require("degit"));
const fs_1 = require("fs");
const emitter = (0, degit_1.default)('TechnoPvP/notherbp', {
    cache: false,
    force: true,
    verbose: false,
    mode: 'tar',
});
emitter.on('info', function (info) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(info.message);
        (0, fs_1.unlink)('./repo/te', (file) => {
            console.log(file);
        });
    });
});
commander_1.program.version('0.0.1');
commander_1.program
    .option('-d, --debug', 'Output extra debugging')
    .option('-n, --node', 'Node backend')
    .option('-f, --frontend <type>', 'Frontend');
commander_1.program
    .command('run <path>')
    .description('run the bs strap mf')
    .action((path) => __awaiter(void 0, void 0, void 0, function* () {
    emitter.remove('./repo', './please', { action: 'remove', files: ['work.js'] });
    console.log(chalk_1.default.magenta('Cloning: ') + `github repo into ` + chalk_1.default.blue(path));
    yield emitter.clone(path);
}));
const choices = ['Services', 'Controllors', 'Repos'];
const questions = [
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
commander_1.program
    .command('start')
    .description('Start the bootstrap process')
    .action(srouce => {
    inquirer_1.default.prompt(questions).then(answer => {
        console.log(answer);
    });
});
commander_1.program.parse(process.argv);
