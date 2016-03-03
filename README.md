browserify-skeleton
==============================

An Angular project skeleton using browserify, for the [2016-03-03
SoCal Angular JS Meetup](http://www.meetup.com/socal-angular/events/228246861/)

setup
-----
```
npm install
bower install
npm install -g grunt-cli
```

development
-----------
```
grunt
```
Then open the served app at `localhost:3000`

production
----------
```
grunt build
```

To test the built version, run `grunt servebuilt`

testing
-------
For continuous testing:
```
grunt test
```
To run a test coverage report:
```
grunt test:coverage
```
Then open `coverage\PhantomJS<version-number>\index.html` in your browser.
