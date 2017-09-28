# This application shows you where you can find the best pizza near you!

###### How this works - this application works by letting the user see the best pizza for your family in town.

[This github repo helped create the application that we is going to be serving the public](https://github.com/simonholmes/getting-MEAN)

## Following this text is some snippets of code that show how we created this application

```javascript 

module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Pizza Planet',
        pageHeader: {
            title: 'Pizza Planet'
        },
        sidebar: {
            context: 'is on Loc8r because it has great pizza at great prices',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Pizza Planet',
            address: '6801 Bell St, Amarillo, TX 79109',
            rating: 4.5,
            facilities: ['Great food', 'Great prices', 'Great customer service!'],
            coords: {
                lat: 35.138673,
                lng: -101.901395
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Savannah Fuentes',
                rating: 4,
                timestamp: '16 July 2013',
                reviewText: 'What a great pizza place! I love their breadsticks'
            }, {
                author: 'Richard Andrade',
                rating: 5,
                timestamp: '16 June 2013',
                reviewText: 'Amazing pizza! My favorite in town'
            }]
        }
    });
};

```

### above shows the how the code processes the pizza restaraunts. This is the code to generate the pizza planet page, with reviews, a map with their hours to know when to go!

# This application will continue to grow and we will keep adding pizza places to make the publics' experience in the area even better, enjoy this application!