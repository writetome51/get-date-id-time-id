import {
	getDateID,
	getTimeID
} from './index';


let res = getDateID();
console.log(res);


res = getDateID({includeFullYear: true});
console.log(res);


res = getDateID({includeFullYear: true, order: 'dmy'});
console.log(res);


res = getDateID({includeFullYear: true, order: 'dmy', separateEach: true});
console.log(res);


res = getDateID({includeFullYear: true, order: 'myd', separateEach: true});
console.log(res);


res = getDateID({includeFullYear: true, order: 'mdy', separateEach: true});
console.log(res);

res = getDateID({includeFullYear: true, order: 'mdy', separateEach: true, separator: 'ee'});
console.log(res);

res = getDateID({includeFullYear: true, order: 'mdy', separator: 'ee'}); // won't show separator.
console.log(res);


res = getTimeID();
console.log(res);


res = getTimeID({separator: 'ee', separateEach: true});
console.log(res);

res = getTimeID({separateEach: true, order: 'smh'});
console.log(res);

res = getTimeID({separateEach: true, includeTimezoneOffset: false});
console.log(res);


res = getTimeID({includeTimezoneOffset: false});
console.log(res);


res = getTimeID({separateEach: true, separator:'__'});
console.log(res);
