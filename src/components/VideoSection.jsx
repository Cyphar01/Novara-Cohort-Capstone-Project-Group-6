function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source
            src="https://res.cloudinary.com/dg3f5oyel/video/upload/v1770266218/Planet_video_d1xg5h.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="video-text">
        <div className="video-heading">
          <h2>How Planetary Data Helps Us Understand Space</h2>
        </div>

        <div className="video-paragraph">
          <p>
            Planetary science goes beyond images. Comparing <a href="/">mass</a>, <a href="/">diameter</a>,
            <a href="/">gravity</a>, and <a href="/">density</a>, we gain insight into how planets form, behave,
            and interact within the solar system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;