import "./styles.css";
//import VideoListPlayer from "./VideoListPlayer";

// function App() {
//   return (
//     <div>
//       <h1>OneTube Video Player</h1>
//       <VideoListPlayer />
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>OneTube Sample App</h1>
      <p>Welcome to OneTube MVP!</p>
      {/* <video width="640" height="360" controls>
        <source
          src="https://onetube-videos-347.s3.us-east-1.amazonaws.com/Sample01.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}
