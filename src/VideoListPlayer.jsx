import React, { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Sample Video 1",
    url: "https://onetube-videos-347.s3.us-east-1.amazonaws.com/Sample01.mp4",
    thumbnail:
      "https://fastly.picsum.photos/id/99/200/300.jpg?hmac=Hnlwbe_FdfH-64B_lvRcwVnK7KViI5YgtT8AQRfkFwY", // replace with real thumbnail if available
  },
  {
    id: 2,
    title: "Sample Video 2",
    url: "https://onetube-videos-347.s3.us-east-1.amazonaws.com/Sample02.mp4",
    thumbnail:
      "https://fastly.picsum.photos/id/667/200/300.jpg?hmac=nFrrPWfmtwoDnfNPyXPB8GuxdU_6ic8_cKQm7oyXw1Y",
  },
  // Add more videos here
];

export default function VideoListPlayer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  // Filter videos by search term (case-insensitive)
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      {/* Search bar at the top */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>

      <h2>{currentVideo.title}</h2>
      <video
        key={currentVideo.id}
        width="640"
        height="360"
        controls
        autoPlay
        src={currentVideo.url}
      >
        Your browser does not support the video tag.
      </video>

      <h3>Other Videos</h3>
      <div style={{ display: "flex", gap: 16, overflowX: "auto" }}>
        {filteredVideos.length === 0 ? (
          <p>No videos found.</p>
        ) : (
          filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setCurrentVideo(video)}
              style={{
                cursor: "pointer",
                border:
                  video.id === currentVideo.id
                    ? "2px solid blue"
                    : "2px solid transparent",
                padding: 4,
                minWidth: 160,
              }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                width="160"
                height="90"
                style={{ display: "block", marginBottom: 8 }}
              />
              <div>{video.title}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
