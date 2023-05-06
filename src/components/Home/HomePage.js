import videoHomepage from '../../assets/video-homepage.webm'
const HomePage = (props) => {
    return(
        <div className="homepage-container">
            <video>
                <source 
                src={videoHomepage}
                type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                
            </div>
        </div>
    )
}
export default HomePage;