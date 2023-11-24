let text = new String("Wikipedia is a free online encyclopedie");

let s=text.split(" ");
document.write(s[0]," ",s[5],"<br>");

let t=text.replace("online","offline");
document.write (t.substring(19,26),text.substring(26,39),"<br>");
document.write(text.substring(0,10),"...");


