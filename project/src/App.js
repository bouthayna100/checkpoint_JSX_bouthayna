import './style.css';
import imageInSrc from './imageInSrc.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container" style={{ border: 'solid 1px rgba(0, 0, 0, .03)', maxWidth: '50vw' }}>
        <h1 className="title red">Welcome to GoMyCode</h1>
        <div className="row">
                  <div class="col">
          <h3>Learn development by making</h3>
          <br />

            <p>We train the next tech generation on the most innovative and recent technologies. We help them get ready for the jobs of the future and prepare them for their professional endeavour while reinforcing their employability.</p>
        </div>
          <div class="col">
          <img src={imageInSrc} style={{ width: '100px' }} />
          <br />
            <button className="button-d">Discover our Programs</button>

          </div>
        </div>

      <div className="row">
        <div class="col">
          <img src='/imageInPublic.jpg' className="rounded-circle"style={{ width: '270px', height: '160px' }} />
          </div>
        <div className="col">
          <video width="320" height="240" controls >
            <source src="/myVideo.mp4" type="video/mp4" />
            </video>
          </div>
      </div>
      </div>
    
  );
}

export default App;
