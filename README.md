# infinispin

A collection of spinners that signify a persistent connection to the server; integrated into a Meteor application.

## Why?

This package allows you to add a simple visual cue in the form of an animated SVG spinner that indicates infinite loading.  This provides a feel of added depth to the experience as well as giving the user more information than is typically available.

Pages written in Meteor that utilize cursors can sometimes feel lifeless and it may not be apparent to the user that refreshing the page is not needed.

This package will also indicate disconnects and reconnects to the user; which Meteor can handle somewhat transparently. 

The goals of this package are the following

* To give a pleasing visual cue to the user that part of the web page is reactively updated.
* To cleanly indicate when a user is disconnected or reconnects.
     
## Quick Start

Install infinispin :

    meteor add ros:infinispin

Add a spinner to a template :

    {{> infinispin}}

Turn this lifeless UX

![Alt text](http://i.imgur.com/9wmoQ2a.png "A PNG for lack of responsiveness")

Into this

![Alt text](http://i.imgur.com/kp8ltox.gif "This one is a gif!")

Instead of sitting wondering if you're connected, now you'll know

![Alt text](http://i.imgur.com/pJt7owY.gif "Disconnected from Meteor server")

## Options

Global options are stored under Meteor.infinispin.options.

**Note : context scope means the option be context bound with 'each' or 'with' in spacebars.  Local scope inherits global scope.**

###spinner
default *radio*, scope *context*

(Previews are gif exports, SVGs render in full quality)

* radio : ![Alt text](http://i.imgur.com/18e0aR6.gif "radio")
* ripple : ![Alt text](http://i.imgur.com/V5GyJvB.gif?1 "ripple")
* dashinfinity : ![Alt text](http://i.imgur.com/WWXBjtY.gif?1 "dashinfinity")
* heart : ![Alt text](http://i.imgur.com/y2JKOJ3.gif "heart")
* infinity : ![Alt text](http://i.imgur.com/yAaBNSk.gif "infinity")

###title 
default *"This view automatically refreshes."*, scope *context*

![Alt text](http://i.imgur.com/x1rZW3a.png "This view automatically refreshes.")

###disconnectedTitle 
default *"You have been disconnected.  Hold on while we try to reconnect in the background."*, scope *context*

![Alt text](http://i.imgur.com/10yOXKZ.png "This view automatically refreshes.")

###fill1 
default *'#56e1e1'*, scope *context*
###fill2 
default *'#56e1e1'*, scope *context*
###fill3 
default *'#56e1e1'*, scope *context*

The various fills of the SVG animation.  Not all SVGs have 3 fills; you may have to play with these a little to understand which part of the SVG they are.

###disconnectedFill 
default '#db2828', scope *context*

The fill of the disconnected 'X' that is added to the SVG spinner when disconnected.  Defaults to ~red.

###displayDisconnection 
default *true*, scope *global*

Whether or not to display disconnections to the user.  
###height 
default *'2rem'*, scope *context*
###width 
default *'2rem'*, scope *context*

Height and width are relatively sized to the parent element and separately scalable
###stopFrame 
default *.8*, scope *global* 

The frame at which to stop the animation for a disconnection.  Animation will resume from this frame if reconnected.

## Credits

[loading.io](http://loading.io) provides several free SVG animations that indicate infinite streams of data.  Currently, this package wraps 5 of the SVG animations.

## Browser support

![Alt text](http://i.imgur.com/KzGxYTX.png "RIP IE, Edge, Microsoft.")

Currently, Internet explorer and Microsoft Edge can't be supported as they don't support SVG animations.  But, there's no reason why you can't create a gif using [loading.io](http://loading.io) as a backup.  The problem with supporting this via this package is that gifs wouldn't be configurable.
    

