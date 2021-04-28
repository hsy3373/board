const titleBox = document.querySelector(".title-box");
const titleInput = titleBox.querySelector(".title-input");

const writerBox = document.querySelector(".writer-box")
const writerInput = writerBox.querySelector(".writer-input");

const contentBox = document.querySelector(".content-input");
const contentInput = contentBox.querySelector("input");

const passwordBox = document.querySelector(".password-box")
const passwordInput = passwordBox.querySelector(".password-input");

const addButton = document.querySelector("a.add-button");
const valueList = [];

function getText() {
  
  const currentValue = {
    num: "",
    title: "",
    writer: "",
    content: "",
    password: "",
    date: ""
  };
  currentValue.num = String(localStorage.length+1);
  currentValue.title = titleInput.value;
  currentValue.writer = writerInput.value;
  currentValue.content = contentInput.value;
  currentValue.password = passwordInput.value;
  currentValue.date = getToday();
  valueList.push(currentValue);
}

function getToday(){
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
}

function getNum() {
  let n = 0;
  if (localStorage.length > 0) {
    n = localStorage.length;
  }else{
    n = 0;
  }
  return n;
}

function clickAdd() {
  getText();
  let num = getNum();
  localStorage.setItem(eval(new String("No."+num)), JSON.stringify(valueList[0]));
}


function init() {
  addButton.addEventListener("click", clickAdd);
}


init();