export function setUserCookie(token) { 
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 50000;
    now.setTime(expireTime);
    document.cookie = 'cookie=ok;expires='+now.toUTCString()+';token='+token+'';
    //console.log(document.cookie);  // 'Wed, 31 Oct 2012 08:50:17 UTC'
  }