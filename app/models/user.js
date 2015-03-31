var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
    tableName: 'users',
    hasTimestamps: false,
    initialize: function (obj) {
      var that = this;
      this.set('username', obj.username);
      bcrypt.hash(obj.password, null, null, (function(err, hash) {
        that.set('password', hash);
      }));
    }

});


module.exports = User;