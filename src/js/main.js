/* Contact */
var post = function(url, data, callback) {
  var r = new XMLHttpRequest();
  r.onreadystatechange = function() {
    if (r.readyState == 4)
      callback(r.responseText)
  }
  r.open('POST', url, true);
  r.send(data);
};
window.onload = function() {
  document.getElementById('send').onclick = function() {
    var data = 'name=' + document.getElementById('cname').value + '&mail=' + document.getElementById('cmail').value + '&msge=' + document.getElementById('cmsge').value + '&page=' + location.hash;
    console.log(data)
    post('https://thomasg.be/contact.php', function(d) {
      document.getElementById('send').innerHTML = d;
    }, data)
  };
};
