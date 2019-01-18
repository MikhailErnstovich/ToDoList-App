var num = 0;
var check = true;

function addFunction2 () {
  var doneBtn = document.createElement("BUTTON");
  var doneBtnText = document.createTextNode("✔");
  doneBtn.appendChild(doneBtnText);
  doneBtn.setAttribute("onclick","doneFunction2(this)");
  var newDiv = document.createElement("div");
  var newInput = document.createElement("textarea");
  newDiv.appendChild(doneBtn);
  newDiv.appendChild(newInput);
  var delBtn = document.createElement("BUTTON");
  var delBtnText = document.createTextNode("❌");
  delBtn.appendChild(delBtnText);
  newDiv.appendChild(delBtn);
  var newList = document.getElementById("newlist");
  newList.appendChild(newDiv);
  delBtn.setAttribute("onclick","delFunction2(this)");
  newInput.setAttribute("onblur", "inputToP(this)");
  newDiv.setAttribute("class","taskList");
  doneBtn.setAttribute("class","doneBtn");
  delBtn.setAttribute("class","delBtn");
  newInput.setAttribute("placeholder","Gee, Brain, what do you want to do tonight?");
}

function delFunction2(a) {
  a.parentNode.id = num;
  var parent = document.getElementById("newlist");
  var child = document.getElementById(num);
  parent.removeChild(child);
  num = num - 1;  
}

function doneFunction2(a) {
  str = a.nextSibling.innerHTML;
  pos = str.indexOf("<del>");
  if (pos == -1 && inputText != "") {
    b = "<del>" + a.nextSibling.innerHTML + "</del>";
    a.nextSibling.innerHTML = b;
    a.innerHTML = "↻";
    a.setAttribute("class","unDoneBtn");
    check = false;
  } else {
    b = a.nextSibling.innerHTML;
    a.nextSibling.innerHTML = b.replace("<del>","");
    b = a.nextSibling.innerHTML;
    a.nextSibling.innerHTML = b.replace("</del>","");
    a.innerHTML = "✔";
    a.setAttribute("class","doneBtn");
    check = true;
  }
}

function inputToP(a) {
  inputText = a.value;
  if (inputText != "") {
    var parent = a.parentNode;
    var child = a;
    var pNode = document.createElement("p");
    var pNodeText = document.createTextNode(inputText);
    pNode.appendChild(pNodeText);
    parent.replaceChild(pNode,child);
    pNode.setAttribute("onclick","pToInput(this)");
  }
}

function pToInput(a) {
  b = a.innerHTML;
  if (check = true) {
    b = b.replace("<del>","");
    b = b.replace("</del>","");
    a.previousSibling.setAttribute("class","doneBtn");
    a.previousSibling.innerHTML = "✔";
  }
  var parent = a.parentNode;
  var child = a;
  var inputNode = document.createElement("textarea");
  var inputNodeText = document.createTextNode(b);
  inputNode.appendChild(inputNodeText);
  parent.replaceChild(inputNode,child);
  inputNode.setAttribute("onblur","inputToP(this)");
  inputNode.focus();
}