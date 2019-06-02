"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var res = index_1.getDateID();
console.log(res);
res = index_1.getDateID({ includeFullYear: true });
console.log(res);
res = index_1.getDateID({ includeFullYear: true, order: 'dmy' });
console.log(res);
res = index_1.getDateID({ includeFullYear: true, order: 'dmy', separateEach: true });
console.log(res);
res = index_1.getDateID({ includeFullYear: true, order: 'myd', separateEach: true });
console.log(res);
res = index_1.getDateID({ includeFullYear: true, order: 'mdy', separateEach: true });
console.log(res);
res = index_1.getDateID({ includeFullYear: true, order: 'mdy', separateEach: true, separator: 'ee' });
console.log(res);
res = index_1.getDateID({ includeFullYear: true, order: 'mdy', separator: 'ee' }); // won't show separator.
console.log(res);
res = index_1.getTimeID({ separator: 'ee' }); // won't show separator.
console.log(res);
res = index_1.getTimeID({ separator: 'ee', separateEach: true });
console.log(res);
res = index_1.getTimeID({ separateEach: true, order: 'smh' });
console.log(res);