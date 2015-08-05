(function(){
    var madeFirstConnection = false;

    Meteor.autorun(function() {
        Meteor.status();
        if(Meteor.infinispin && Meteor.infinispin.options.displayDisconnection) {
            if (Meteor.status().connected) {
                madeFirstConnection = true;
                $('.spinWrapper > svg').each(function (i, el) {
                    el.unpauseAnimations();
                    el.parentNode.attributes.title.value = Meteor.infinispin.options.title;
                    $('.spinDisconnect').attr('visibility', 'hidden');
                    $('.spinWrapper').css('visibility', 'visible'); //Render can finish before connect
                });
            } else if (madeFirstConnection) {
                $('.spinWrapper > svg').each(function (i, el) {
                    el.setCurrentTime(Meteor.infinispin.options.stopFrame);
                    el.pauseAnimations();
                    el.parentNode.attributes.title.value = Meteor.infinispin.options.disconnectedTitle;
                    $('.spinDisconnect').attr('visibility', 'visible');
                });
            }
        }
    });

    //Spinner won't show until we actually connect
    Template.infinispin.rendered = function(){
        if(madeFirstConnection){
            $('.spinWrapper').css('visibility', 'visible');  //But you've ever connected, it gets shown
        }
    };

    Template.infinispin.helpers({
        opts: function () {
            return _.extend(Meteor.infinispin.options, Template.instance().data);
        },
        equals : function(v1,v2){
            return v1===v2;
        }
    });

    Meteor.infinispin = {
        options : {
            spinner : 'radio', //params : ['ripple', 'infinity', 'dashinfinity', 'heart', 'radio']
            title : "This view automatically refreshes.",
            disconnectedTitle : "You have been disconnected.  Hold on while we try to reconnect in the background.",
            fill1 : '#56e1e1',
            fill2 : '#56e1e1',
            fill3 : '#56e1e1',
            disconnectedFill : '#db2828',
            displayDisconnection : true,
            height : '2rem',
            width : '2rem',
            stopFrame :.8
        }
    };
})();