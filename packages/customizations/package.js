Package.describe({
  summary: 'site customizations',
  version: '0.1.0',
  name: 'customizations'
});

Npm.depends({
  // NPM package dependencies
});

Package.onUse(function (api) {

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n',                   // internationalization package
    'iron:router',                // routing package
    'templating',
    'telescope-base',             // basic Telescope hooks and objects
    'telescope-lib',              // useful functions
    'telescope-i18n',             // internationalization wrapper
    'fourseven:scss'             // SCSS compilation package
  ]);

  // client

  api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating',                  // required for client-side templates
    'telescope-theme-hubble'
  ], ['client']);

  // server

  api.use([
    //
  ], ['server']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.add_files([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.add_files([
    'lib/custom_fields.js',
    'lib/hooks.js',
    'lib/main.js',
    'lib/routes.js',
    'lib/settings.js',
    'lib/templates.js'
  ], ['client', 'server']);

  // client

  api.add_files([
    'lib/client/templates/custom_template.html',
    'lib/client/templates/custom_template.js',
    'lib/client/templates/customPostTitle.html',
    'lib/client/templates/externalPostsUrl.html',
    'lib/client/templates/new-post-body.html',
    'lib/client/kepler.js',
    'lib/client/stylesheets/custom.scss'
  ], ['client']);

  // server

  api.add_files([
    'lib/server/publications.js'
  ], ['server']);    

  // i18n languages (must come last)

  api.add_files([
    'i18n/en.i18n.json',
  ], ['client', 'server']);

  // -------------------------------- 3. Variables to export --------------------------------

  api.export([
    'myFunction'
  ]);

});