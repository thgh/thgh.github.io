/* Contact me */
var ajax = function(url, callback, data) {
  var a;
  try {
    a = new XMLHttpRequest();
  } catch (e) {
    try {
      a = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        a = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        return null;
      }
    }
  }
  a.onreadystatechange = function() {
    if (a.readyState == 4)
      callback(a.responseText)
  }
  a.open('POST', url, true);
  a.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  a.setRequestHeader('Connection', 'close');
  a.send(data);
};
window.onload = function() {
  document.getElementById('send').onclick = function() {
    var data = 'name=' + document.getElementById('cname').value + '&mail=' + document.getElementById('cmail').value + '&msge=' + document.getElementById('cmsge').value + '&page=' + location.hash;
    console.log(data)
    ajax('contact.php', function(d) {
      document.getElementById('send').innerHTML = d;
    }, data)
  };
};
/* Analytics */
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-50151045-1', 'thomasg.be');
ga('send', 'pageview');
