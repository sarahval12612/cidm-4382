/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with good pizza',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to eat pizza with your family!'
        },
        sidebar: "Looking for good pizza? Loc8r helps you find places to work when out and about. Perhaps with pizza, breadsticks or a coke? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Pizza Planet',
            address: '6801 Bell St, Amarillo, TX 79109',
            rating: 5,
            facilities: ['Great food', 'Great prices', 'Great customer service!'],
            distance: '150m'
        }, {
            name: '575 pizzeria',
            address: '575 Pizzeria, 2803 Civic Cir, Amarillo, TX 79109',
            rating: 4.5,
            facilities: ['Great Service', 'Great food', 'Great atmosphere'],
            distance: '250m'
        }, {
            name: 'Pizza Hut',
            address: '6019 S Coulter St, Amarillo, TX 79119',
            rating: 3,
            facilities: ['Okay pizza', 'Okay service'],
            distance: '350m'
        }]
    });
};

/* GET 'Location info' page */
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

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Pizza Planet on Loc8r',
        pageHeader: {
            title: 'Review Pizza Planet'
        }
    });
};