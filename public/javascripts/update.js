const titleInput = document.querySelector('input.title-input');
const writerInput = document.querySelector('input.writer-input');
const contentInput = document.querySelector('textarea.content-input');
const passwordInput = document.querySelector('input.password-input');
const updateButton = document.querySelector('button.update-button');

function getAllInput() {
  return {
    title: titleInput.value,
    writer: writerInput.value,
    content: contentInput.value,
    password: passwordInput.value,
  };
}
const getObjectId = () => window.location.pathname.split('/')[2];

function updateBorder() {
  const id = getObjectId();

  return fetch(`http://localhost:3000/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getAllInput()),
  })
    .then(() => {
      location.href = `http://localhost:3000/detail/${id}`;
      return alert('수정되었습니다');
    })
    .catch((error) => {
      console.error(error);
    });
}

updateButton.addEventListener('click', updateBorder);
