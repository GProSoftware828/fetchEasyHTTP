const data = {
	name: 'John Doe',
	username: 'johndoe',
	email: 'jdoe@gmail.com'
}

const http = new EasyHTTP;

http.get('/js_sandbox/posts.json')
	.then(data => console.log(data))
	.catch(err => console.log(err));

http.post('/js_sandbox/posts.json', data)
	.then(data => console.log(data))
	.catch(err => console.log(err));

http.put('/js_sandbox/posts.json/1', data)
	.then(data => console.log(data))
	.catch(err => console.log(err));

http.delete('/js_sandbox/posts.json/1')
	.then(data => console.log(data))
	.catch(err => console.log(err));