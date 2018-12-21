document.getElementById('button1').addEventListener('Submit', getJson);

// Get local json data
function getJson() {
  fetch('posts.json')
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
  });
};