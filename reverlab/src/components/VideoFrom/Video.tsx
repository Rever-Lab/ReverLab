import Form from "./Form";
import './Video.css';

const VideoSection = () => (
	<section className="hero">
		<div className="bg-video">
			<iframe
				width="100%" height="100%"
				src="https://www.youtube.com/embed/wxCQ2Ht_UKA?autoplay=1&mute=1&loop=1&playlist=wxCQ2Ht_UKA&controls=0&modestbranding=1"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
			</iframe>
		</div>
		<div className="overlay">
				<div className="form-wrapper">
					<Form />
				</div>
		</div>
	</section>
);
export default VideoSection;
