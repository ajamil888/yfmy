// $Id: openid.js,v 1.1.2.4 2007/07/28 03:05:47 walkah Exp $

$(document).ready(
  function() {
    if ($("#edit-openid-url").val()) {
      $("#edit-name-wrapper").hide();
      $("#edit-pass-wrapper").hide();
      $("#edit-openid-url-wrapper").show();
      $("a.openid-link").hide();
    }
    $("a.openid-link").click( function() {
      $("#edit-pass-wrapper").hide();
      $("#edit-name-wrapper").fadeOut('medium', function() {
          $("#edit-openid-url-wrapper").fadeIn('medium');
        });
      $("a.openid-link").hide();
      $("a.user-link").show();
      return false;
    });
    $("a.user-link").click( function() {
      $("#edit-openid-url-wrapper").hide();
      $("#edit-pass-wrapper").show();
      $("#edit-name-wrapper").show();
      $("a.user-link").hide();
      $("a.openid-link").show();
      return false;
    });
  });


