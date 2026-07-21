const { format } = require('date-and-time');

format(new Date(), 'ddd, MMM DD YYYY');
// => Wed, Jul 09 2025
console.log(format(new Date(), 'ddd, MMM DD YYYY'));