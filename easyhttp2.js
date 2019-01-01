class EasyHTTP {
	async get(url) {
		const response = await fetch(url);
		const resData = await response.json();
		return resData;
	};

	//The parameters are for the transaction- so it's a location and the data being moved
	async post(url, data) {
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

	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url,
				{
					method: 'PUT', headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(data)
				})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		})
	};

	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url,
				{
					method: 'DELETE', headers: {
						'Content-type': 'application/json'
					},
				})
				.then(res => res.json())
				.then(() => resolve('Resource deleted'))
				.catch(err => reject(err));
		})
	};
}