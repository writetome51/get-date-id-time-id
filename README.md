# getDateID(options?): string
```ts
// `options`:
{
    includeFullYear?: boolean, // default false
    order?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy', // default 'ymd'
    separator?: string, // default '-' 
    separateEach?: boolean // default false
}
```

# getTimeID(options?): string
```ts
// `options`:
{
    order?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm', // default 'hms'
    separator?: string, // default '-' 
    separateEach?: boolean // default false
}
```

# getDefaultsFor_getTimeIDOptions():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object

Returns default options for `getTimeID()`.
  
# getDefaultsFor_getDateIDOptions():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object

Returns default options for `getDateID()`.

## Examples
```ts
getDateID(); // Date is 2019, May 22
// --> '190522'  

getDateID({includeFullYear: true, order: 'mdy'});
// --> '05222019'

getDateID({includeFullYear: true, order: 'mdy', separateEach: true});
// --> '05-22-2019'

getTimeID(); // Time is 4:20pm and 25 seconds
// --> '162025'

getTimeID({separateEach:true});
// --> '16-20-25'

getTimeID({separateEach:true, separator: '__'});
// --> '16__20__25'

getTimeID({separateEach:true, separator: '__', order: 'smh'});
// --> '25__20__16'
```


## Installation
`npm i  @writetome51/get-date-id-time-id`

## Loading
```ts
// if using TypeScript:
import {getDateID, getTimeID, getDefaultsFor_getTimeIDOptions, 
    getDefaultsFor_getDateIDOptions} from '@writetome51/get-date-id-time-id';

// if using ES5 JavaScript:
var getDateID = require('@writetome51/get-date-id-time-id').getDateID;
var getTimeID = require('@writetome51/get-date-id-time-id').getTimeID;
var getDefaultsFor_getTimeIDOptions = 
    require('@writetome51/get-date-id-time-id').getDefaultsFor_getTimeIDOptions;
var getDefaultsFor_getDateIDOptions = 
    require('@writetome51/get-date-id-time-id').getDefaultsFor_getDateIDOptions;
```
