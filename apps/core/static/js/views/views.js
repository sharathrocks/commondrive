"use strict";

/* jshint -W097 */

/* global alert */
/* global console */
/* global BootstrapDialog */

/* global _ */
/* global $ */

/* global CD */

CD.views.UserDropdownView = CD.views.BaseView.extend({

    template: _.template($('#UserDropdownTmpl').html()),

    events: {
        'click #AH_UserProfile': 'onUserProfile'
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    serialize: function() {
        return {
            user: this.model
        };
    },

    onUserProfile: function(evt) {
        CD.log('User clicked on User Profile');
        evt.preventDefault();
        CD.globals.router.navigate('user_profile', {
            trigger: true
        });
        return this;
    }

});

CD.views.DashboardView = CD.views.BaseView.extend({

    template: _.template($('#DashboardTmpl').html()),

});