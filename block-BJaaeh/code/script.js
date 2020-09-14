let para = document.createElement('h1');
document.body.append(para);
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  let time = h + ':' + m + ':' + s;
  para.innerText = time;
}
showTime();
setInterval(showTime, 1000);
