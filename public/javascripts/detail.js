const removeButton = document.querySelector('button.remove-button');
const updateButton = document.querySelector('button.add-button');

const removeById = (id, password) => {
  return fetch(`http://localhost:3000/detail/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
    }),
  });
};

const updateById = (id, password) => {
  return fetch(`http://localhost:3000/update/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
    }),
  });
};

const getObjectId = () => window.location.pathname.split('/')[2];

removeButton.addEventListener('click', () => {
  const password = prompt('비밀번호를 입력해 주세요.');
  if (!password) return alert('비밀번호를 입력해주세요.');
  const id = getObjectId();
  removeById(id, password)
    .then((res) => {
      if (res.status === 403) return alert('비밀번호가 올바르지 않습니다.');
      location.href = 'http://localhost:3000/';
      alert('게시글이 삭제되었습니다.');
    })
    .catch((error) => {
      console.error(error);
    });
});

updateButton.addEventListener('click', () => {
  const id = getObjectId();
  const password = prompt('비밀번호 입력바람');
  if (!password) return alert('비밀번호가 입력되지 않았습니다');

  updateById(id, password)
    .then((res) => {
      if (res.status === 403) return alert('비밀번호가 틀렸습니다');
      location.href = `http://localhost:3000/update/${id}`;
    })
    .catch((error) => {
      console.error(error);
    });
});
