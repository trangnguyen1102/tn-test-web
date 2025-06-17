// Zaius / Optimizely snippet
var zaius = window['zaius'] || (window['zaius'] = []);
zaius.methods = ["initialize", "onload", "customer", "entity", "event", "subscribe", "unsubscribe", "consent", "identify", "anonymize", "dispatch"];
zaius.factory = function (e) {
  return function () {
    var t = Array.prototype.slice.call(arguments);
    t.unshift(e);
    zaius.push(t);
    return zaius;
  };
};
(function () {
  for (var i = 0; i < zaius.methods.length; i++) {
    var method = zaius.methods[i];
    zaius[method] = zaius.factory(method);
  }
  var e = document.createElement("script");
  e.type = "text/javascript";
  e.async = true;
  e.src = ("https:" === document.location.protocol ? "https://" : "http://") +
    "d29jn6x8493ams.cloudfront.net/v2/BfcIiSdOSzJLitXt7LuFqw/zaius-min.js";
  var t = document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(e, t);
})();
zaius.event('pageview');

// Modal toggle logic
function openModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.style.display = 'none';
}
