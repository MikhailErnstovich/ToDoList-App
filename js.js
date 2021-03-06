var num = 0;
var check = true;

	//[Add new task]
function addFunction2 () {
	//[DONE button]
  var doneBtn = document.createElement("BUTTON");
  var doneBtnText = document.createTextNode("✔");
  doneBtn.appendChild(doneBtnText);
  doneBtn.setAttribute("onclick","doneFunction2(this)");
  doneBtn.setAttribute("class","doneBtn");
	//[Delete button]
  var delBtn = document.createElement("BUTTON");
  var delBtnText = document.createTextNode("❌");
  delBtn.appendChild(delBtnText);
  delBtn.setAttribute("onclick","delFunction2(this)");
  delBtn.setAttribute("class","delBtn");
	//[Text area]
  var newInput = document.createElement("textarea");
  newInput.setAttribute("onblur", "inputToP(this)");
  newInput.setAttribute("placeholder","Gee, Brain, what do you want to do tonight?");
  	//[Task block gets textarea and buttons]
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class","taskList");
  newDiv.appendChild(doneBtn);
  newDiv.appendChild(newInput);
  newDiv.appendChild(delBtn);
	//[List of tasks gets new position]
  var newList = document.getElementById("newlist");
  newList.appendChild(newDiv);

	//There is a code of slowly appearing of new task elements.
  newDiv.style.opacity = 0;
  var x;
  var i = 0;
  x = setInterval(function(){
    //get opacity in decimals
    var opacity = i / 100;
    //set the next opacity step
    i = i + 5; 
    if(opacity > 1){
      clearInterval(x);
      //if 1-opaque, stop
      return; 
    }
    //modern browsers
    newDiv.style.opacity = opacity;
    //older IE
    newDiv.style.filter = 'alpha(opacity=' + opacity*100 + ')';
  }, 40);
}

	//Delete task
function delFunction2(a) {
  a.parentNode.id = num;
  var parent = document.getElementById("newlist");
  var child = document.getElementById(num);
  parent.removeChild(child);
  num = num - 1;  
}
	
	//Mark task as DONE
function doneFunction2(a) {
  str = a.nextSibling.innerHTML;
  pos = str.indexOf("<del>");
  if (pos == -1 && str != "") {
    a.nextSibling.innerHTML = "<del>" + a.nextSibling.innerHTML + "</del>";
    a.innerHTML = "↻";
    a.setAttribute("class","unDoneBtn");
    check = false;
  } else {
    a.nextSibling.innerHTML = a.nextSibling.innerHTML.replace("<del>","");
    a.nextSibling.innerHTML = a.nextSibling.innerHTML.replace("</del>","");
    a.innerHTML = "✔";
    a.setAttribute("class","doneBtn");
    check = true;
  }
}
	//Turn textarea to p-element with the same value
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
	//vice versa p-element to textarea
function pToInput(a) {
  if (check = true) {
    a.innerHTML = a.innerHTML.replace("<del>","");
    a.innerHTML = a.innerHTML.replace("</del>","");
    a.previousSibling.setAttribute("class","doneBtn");
    a.previousSibling.innerHTML = "✔";
  }
  var parent = a.parentNode;
  var child = a;
  var inputNode = document.createElement("textarea");
  var inputNodeText = document.createTextNode(a.innerHTML);
  inputNode.appendChild(inputNodeText);
  parent.replaceChild(inputNode,child);
  inputNode.setAttribute("onblur","inputToP(this)");
  inputNode.focus();
}

