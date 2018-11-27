const http = new EasyHTTP;

http.get('#')
	.then(data => console.log(data))
	.catch(err => console.log(err));

const data = {
	name: 'John Doe',
	username: 'johndoe',
	email: 'jdoe@gmail.com'
}

http.post('#', data)
	.then(data => console.log(data))
	.catch(err => console.log(err));

http.put('#/#', data)
	.then(data => console.log(data))
	.catch(err => console.log(err));

http.delete('#/#')
	.then(data => console.log(data))
	.catch(err => console.log(err));