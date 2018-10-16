const request = require('request');

export function doIt() {
    request('https://api.unsplash.com/photos/random/?client_id=64222a2c6a1fc8b3e035b93b7be4d77645b2536948b251582143baf4f1f122ce', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}