// Using require() in ES5
var FB = require('fb').default;

FB.api('4', function (res) {
    if(!res || res.error) {
     console.log(!res ? 'error occurred' : res.error);
     return;
    }
    console.log(res.id);
    console.log(res.name);
  });