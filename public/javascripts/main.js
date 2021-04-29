const listWrap = document.querySelector(".main-list-wrap");

function makeListItem(listItem){
  const li = document.createElement("li");
  const Btn = document.createElement("button");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");

  Btn.innerHTML = new String("✔"+listItem.num);
  Btn.addEventListener("click", buttonClick(listItem.num));

  span1.innerText = listItem.title;
  span2.innerText = listItem.date;
  span3.innerText = listItem.writer;

  li.appendChild(Btn);
  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(span3);
  li.id = listItem.num;

  listWrap.appendChild(li);
}

function buttonClick(num) {
  localStorage.setItem("item", num);
  window.location.href = '/detail/detailadd'
}

function makeList(list){
  for(let i=0; i<list.length; i++){
    makeListItem(list[i]);
  }

}

function getList() {

  if(localStorage.length > 0) {
    for(let i=0; i< localStorage.length; i++) {
      const currentListItem = JSON.parse(localStorage.getItem(eval(new String("No."+(i)))));
      console.log(currentListItem);
      console.log(eval(new String("No."+(i))));
      makeListItem(currentListItem); 
      
      
    }
  
  }else {
    console.log("없음");
  }


}

function init() {
  getList();
}

init();