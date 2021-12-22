"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadInitalText = void 0;
const figlet_1 = __importDefault(require("figlet"));
const bootTextOptions = {
    font: 'Sub-Zero',
    width: 90,
    whitespaceBreak: true,
};
function loadInitalText(text = 'Boot') {
    figlet_1.default.text('Boot', bootTextOptions, (err, data) => {
        if (err) {
            console.log('Something went wrong....');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}
exports.loadInitalText = loadInitalText;
