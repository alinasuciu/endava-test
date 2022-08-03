export function setUserCookie(token) {
  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 50000;
  now.setTime(expireTime);
  document.cookie =
    "cookie=ok;expires=" + now.toUTCString() + ";token=" + token + "";
}
