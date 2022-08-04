export function setUserCookie(token) {
  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 30000;
  now.setTime(expireTime);
  document.cookie =
    "token="+token+";expires=" + now.toUTCString();
}

export function deleteUserCookie() {
    document.cookie = "token=;expires=Thu, 18 Dec 2013 12:00:00 UTC";
}

export function checkIfCookieExists(name) {
  return document.cookie.indexOf(name) > -1 
}
