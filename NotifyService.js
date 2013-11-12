angular.module('jumplink.notify').factory("NotifyService", function($timeout) {
  var notify = {};
  var timer;
  var history = [];

  /* type = success | danger | info | warning */
  var show = function(title, message, type) {
    if ( type != 'success' && type != 'danger' && type != 'info' && type != 'warning' ) {
      type = "warning"
    }

    angular.copy({ 
      title: title,
      message: message,
      type: type,
      show: true
    }, notify);

    timer = $timeout(function() {
      notify.show = false;
    }, 3000);

  };

  var show_response = function(response) {
    if(typeof(response) != 'undefined' && response != null) {
      var message = 'error undefined notify message';
      var type = 'danger';
      if(typeof(response.notify) != 'undefined' && response.notify != null && response.notify.length > 0)
        message = response.notify;
      else if(typeof(response.error) != 'undefined' && response.error != null && response.error.length > 0)
        message = response.error;
      else if(typeof(response.err) != 'undefined' && response.err != null && response.err.length > 0)
        message = response.err;

      if(typeof(response.type) != 'undefined' && response.type != null && response.type.length > 0)
        type = response.type;

      show(message, type);
    }
  };

  var hide = function() {
    notify.show = false;
    if(typeof(timer) != 'undefined')
      $timeout.cancel(timer);
  };

  var getNotify = function () {
    return notify;
  };

  return {
    show: show,
    show_response: show_response,
    hide: hide,
    getNotify: getNotify
  };
});