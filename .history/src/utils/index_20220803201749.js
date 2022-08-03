export function setUserCookie(token) {
  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 50000;
  now.setTime(expireTime);
  document.cookie =
    "token="+token+";expires=" + now.toUTCString() + ";
}

export function deleteUserCookie(token) {
    document.cookie = "token="+token+";expires=Thu, 18 Dec 2013 12:00:00 UTC";
}
