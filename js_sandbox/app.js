document.getElementById('button1').addEventListener('Submit', postData);

async postData('posts.json', data) {
  const response = await fetch(url,
    {
      method: 'POST', headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  const resData = await response.json();
  return resData;
};

document.addEventListener('button2').addEventListener('Submit', postData);
postData('posts.json', data) {
  return new Promise((resolve, reject) => {
    fetch('./posts.json', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  })
};

document.getElementById('button3').addEventListener('Submit', getText);

function getText() {
  fetch('test.txt')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li><br /><li>${post.body}</li>`;
      });
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
};