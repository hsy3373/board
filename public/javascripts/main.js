

document.addEventListener("DOMContentLoaded", function() { 

  const post_list = document.querySelector('.post-list');
  const post_item = document.querySelector('.post-item');
  post_list.addEventListener('click', whatEvent);


});


async function  whatEvent(event){

  const wrap = event.target.parentNode;
  console.log(wrap);

  const title_dcm = wrap.querySelector('.title');
  const title_text = title_dcm.innerText;
  console.log(title_text);

  const number_dcm = wrap.querySelector('.number');
  const number_text = await number_dcm.innerText;
  await console.log(number_text);

  const result = await resolveAfter2Seconds();
  console.log(result);

  location.href = 'http://localhost:3000/detail';


}

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}