Package.describe({
  name: 'ros:infinispin',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A collection of spinners that signify a persistent connection to the server; integrated into a Meteor application.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating'], 'client');
  api.addFiles('infinispin.html', 'client');
  api.addFiles('infinispin.css', 'client');
  api.addFiles('infinispin.js', 'client');
});