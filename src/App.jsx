import Header from './Header'
import Search from './Search';
import VideoPlayer from './VideoPlayer';

export default function App() {
	const logado = false
	return (
		<div className="App">
			<Header />
			{logado ? <Search /> : <VideoPlayer />}
		</div>
	);
}