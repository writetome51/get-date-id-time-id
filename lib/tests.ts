import {
	getDateID,
	getDefaultsFor_getDateIDOptions,
	getDefaultsFor_getTimeIDOptions,
	getTimeID
} from './index';


let res = getDateID();
console.log(res);


res = getDateID({includeFullYear:true});
console.log(res);


res = getDateID({includeFullYear:true, order:'dmy'});
console.log(res);


res = getDateID({includeFullYear:true, order:'dmy', separateEach:true});
console.log(res);


res = getDateID({includeFullYear:true, order:'myd', separateEach:true});
console.log(res);


res = getDateID({includeFullYear:true, order:'mdy', separateEach:true});
console.log(res);

res = getDateID({includeFullYear:true, order:'mdy', separateEach:true, separator:'ee'});
console.log(res);

res = getDateID({includeFullYear:true, order:'mdy', separator:'ee'}); // won't show separator.
console.log(res);


res = getTimeID({separator:'ee'}); // won't show separator.
console.log(res);


res = getTimeID({separator:'ee', separateEach:true});
console.log(res);

res = getTimeID({separateEach:true, order:'smh'});
console.log(res);
