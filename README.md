# getDateID(options?): string
```ts
// options:
{
    includeFullYear?: boolean, // default false
    order?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy', // default 'ymd'
    separator?: string, // default '-' 
    separateEach?: boolean // default false
}
```

# getTimeID(options?): string
```ts
// options:
{
    order?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm', // default 'hms'
    separator?: string, // default '-' 
    separateEach?: boolean, // default false
    includeTimezoneOffset?: boolean // default true
}
```

# getDefaultTimeIDOptions():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object

Returns default options for `getTimeID()`.
  
# getDefaultDateIDOptions():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object

Returns default options for `getDateID()`.

## Examples
```ts
getDateID(); // Date is 2019, May 22
// --> '190522'  

getDateID({includeFullYear: true, order: 'mdy'});
// --> '05222019'

getDateID({includeFullYear: true, order: 'mdy', separateEach: true});
// --> '05-22-2019'

getTimeID(); // Time is 12:20:25am, Rome,Italy
// --> '002025+02'

getTimeID(); // Time is 4:20:25pm, Denver Daylight-Savings-Time
// --> '162025-06'

getTimeID({separateEach:true});
// --> '16-20-25-06'

getTimeID({separateEach:true, separator: '__'});
// --> '16__20__25-06'

getTimeID({separateEach:true, separator: '__', order: 'smh'});
// --> '25__20__16-06'
```


## Installation
`npm i  @writetome51/get-date-id-time-id`

## Loading
```ts
import {getDateID, getTimeID, getDefaultTimeIDOptions, 
    getDefaultDateIDOptions} from '@writetome51/get-date-id-time-id';
```
