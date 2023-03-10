import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [data, setData] = useState([]);

	const handleFetch = async () => {
		const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/post`);
		const data = await response.json();
		setData(data);
	};

	useEffect(() => {
		handleFetch();
	}, []);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			{data.map((item: any) => (
				<div key={item.id}>
					<h2>{item.title}</h2>
					<p>{item.content}</p>
					<p>{item.createdAt}</p>
				</div>
			))}
		</div>
	);
}

export default App;
