import exportDefault from './export-default';
console.log(exportDefault);

import {name, hello} from './export-multiple';
console.log(name);
hello();

import * as multi from './export-multiple';
console.log(multi.name);
multi.hello();

import Hello from './export-class';
new Hello('Freewind').hello();