# Mantra Project Boilerplate

Project Boilerplate for MeteorJS (Mantra Arch.) 

Mantra - https://github.com/kadirahq/mantra
mantra-cli - https://github.com/mantrajs/mantra-cli

#Contains:
* React Router
* Redux
* SASS Structure
* Membership Module (for login / register)

#How to use:

1. Clone this repository.
2. Create a mantra app (mantra create myapp)
3. Remove ALL files and folders except .meteor and .scripts
4. Copy the "app" folder inside this repo and paste to your project.
5. Put .meteor and .scripts folder inside the "app" folder.
6. Paste the following text in your packages file inside your .meteor folder:

```
# Meteor packages used by this project, one per line.
# Check this file (and the other files in this directory) into your repository.
#
# 'meteor add' and 'meteor remove' will edit this file for you,
# but you can also edit it by hand.

meteor-base@1.0.4             # Packages every Meteor app needs to have
mobile-experience@1.0.4       # Packages for a great mobile UX
mongo@1.1.15                   # The database Meteor supports right now
reactive-var@1.0.11            # Reactive variable for tracker
jquery@1.11.10                  # Helpful client-side library
tracker@1.1.2                 # Meteor's client-side reactive programming library

standard-minifier-css@1.3.3   # CSS minifier run for production mode
standard-minifier-js@1.2.2    # JS minifier run for production mode
es5-shim@4.6.15                # ECMAScript 5 compatibility for older browsers.
ecmascript@0.6.3              # Enable ECMAScript2015+ syntax in app code
shell-server@0.2.2            # Server-side component of the `meteor shell` command

alanning:roles
accounts-base
accounts-password
mdg:validated-method
twbs:bootstrap
fortawesome:fontawesome
fourseven:scss
kadira:dochead
static-html
```
