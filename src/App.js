import './App.css';


function App() {
  const videoUrl = "https://elite-agents-backend.herokuapp.com/video/stream/url/mp4?url=" +
        "https://user-images.githubusercontent.com/34119356/111480600-75d5ea00-8732-11eb-8016-e40db5f8ab3f.mp4";
  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay src={ videoUrl } >

        </video>
      </header>
    </div>
  );
}

export default App;
