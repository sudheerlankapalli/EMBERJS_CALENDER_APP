import EmberRouter from '@ember/routing/router';
import config from 'my-calender-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('calendar'); // Add this line to define a route for the calendar
});
