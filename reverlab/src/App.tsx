import Navbar from './components/Navbar/Navbar';
import VideoSection from './components/VideoFrom/Video';
import Projects from './components/Projects/Projects';

function App() {

  return (
   <div className="container-fluid p-0 m-0" style={{ minHeight: '100vh' }}>
			<>
				<Navbar />
				<VideoSection />
				<Projects />
			</>
		</div>
  )
}

export default App
