

function users() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data));
}

function display(data) {
  const ul = document.getElementById('User-info');
  for (const user of data) {
    const li = document.createElement('li')
    li.innerText = user.name;
    ul.appendChild(li);
  }
}