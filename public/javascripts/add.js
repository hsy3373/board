const titleInput = document.querySelector('input.title-input');
const addButton = document.querySelector('button.add-button');
const writerInput = document.querySelector('input.writer-input');
const contentInput = document.querySelector('textarea.content-input');
const passwordInput = document.querySelector('input.password-input');

function getBoardPayload() {
  return {
    title: titleInput.value,
    writer: writerInput.value,
    content: contentInput.value,
    password: passwordInput.value,
  };
}

function sendBoard() {
  const board = getBoardPayload();
  fetch('http://localhost:3000/post/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(board),
  })
    .then((res) => {
      location.href = 'http://localhost:3000/';
      alert('게시글이 등록되었습니다.');
    })
    .catch((err) => {
      console.error(err);
    });
}

addButton.addEventListener('click', sendBoard);
