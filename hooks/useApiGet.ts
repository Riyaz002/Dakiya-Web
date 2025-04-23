import get from '../services/api.js'
import { useState, useEffect } from 'react'

export default function useApiGet<T>(path){
	const [response, setResponse] = useState<T | null>(null);
	
	useEffect(() => {
		get(path)
			.then((res) => {
				console.log(res.data);
				setResponse(res.data);
			}
		).catch((err) => {
			console.error(err);
		})
	}, [path])

	return response;
}