// Adding comment to this file.

var visits = getCookie("counter");

if (visits) {
     visits = parseInt(visits) + 1;
     document.write("By the way, you have been here " + visits + " times.");
}
else {
     visits = 1;
     document.write("By the way, this is your first time here.");
}

setCookie("counter", visits);
