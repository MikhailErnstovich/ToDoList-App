var num = 0;
function addFunction2 () {
  var doneBtn = document.createElement("BUTTON");
  var doneBtnText = document.createTextNode("done!");
  doneBtn.appendChild(doneBtnText);
  doneBtn.setAttribute("onclick","doneFunction2(this)");
  var newDiv = document.createElement("div");
  var newInput = document.createElement("INPUT");
  newDiv.appendChild(doneBtn);
  newDiv.appendChild(newInput);
  var btn = document.createElement("BUTTON");
  var btnText = document.createTextNode("delete");
  btn.appendChild(btnText);
  newDiv.appendChild(btn);
  var newList = document.getElementById("newlist");
  newList.appendChild(newDiv);
  btn.setAttribute("onclick","delFunction2(this)");
  newInput.setAttribute("onblur", "inputToP(this)");
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
  if (pos == -1) {
    b = "<del>" + a.nextSibling.innerHTML + "</del>";
    a.nextSibling.innerHTML = b;
  } else {
    b = a.nextSibling.innerHTML;
    a.nextSibling.innerHTML = b.replace("<del>","");
    b = a.nextSibling.innerHTML;
    a.nextSibling.innerHTML = b.replace("</del>","");
  }
}

function inputToP(a) {
  inputText = a.value;
  if (inputText != null) {
    var parent = a.parentNode;
    var child = a;
    var pNode = document.createElement("p");
    var pNodeText = document.createTextNode(inputText);
    pNode.appendChild(pNodeText);
    parent.replaceChild(pNode,child);
    pNode.setAttribute("id","del");
  }
}

