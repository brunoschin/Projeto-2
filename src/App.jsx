import Header from './Header'
import Search from './Search';
import VideoPlayer from './VideoPlayer';
import { useState } from 'react';
import Modal from './Modal';

export default function App() {
	const [logged, setLogged] = useState(false);
	const [modal, setModal] = useState(false);
	return (
		<div className="App">
			<Header {...{ logged, setLogged, modal, setModal }} />
			{logged ? <Search /> : <VideoPlayer />}
			<Modal {...{ logged, setLogged, modal, setModal }} />
		</div>
	);
}