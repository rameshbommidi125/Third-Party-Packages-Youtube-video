import './index.css'
import ReactPlayer from 'react-player'

const videoUrl = 'https://www.youtube.com/watch?v=LXb3EKWsInQ'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url={videoUrl} />
    </div>
  </div>
)

export default VideoPlayer
