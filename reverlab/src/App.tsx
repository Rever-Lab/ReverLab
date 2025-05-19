import Navbar from './components/Navbar/Navbar';
import VideoSection from './components/VideoFrom/Video';

function App() {

  return (
   <div className="container-fluid p-0 m-0" style={{ minHeight: '100vh' }}>
			<>
				<Navbar />
				<VideoSection />
			</>
		</div>
  )
}

export default App
