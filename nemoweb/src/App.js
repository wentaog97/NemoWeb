import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <div className="App-Frame">

          <header className="App-header">
            <div className="app-title">
              <h3>Evolutionary Dynamics</h3>
            </div>
          </header>

          <hr className="divider"></hr>

          <body className="App-body">
            
            <div className="body file">
              <fieldset>
                <legend>Load a file</legend>
                <label>Select File:</label>
                <input></input>
                <button>Browse</button>
                
                <label>File:</label>
              </fieldset>
            </div>

            <div className="body plot">
              <fieldset>
                <legend>Frequency plot</legend>
              </fieldset>
            </div>

            <div className="body filter">
              <fieldset>
                <legend>Pre-filtering</legend>
              </fieldset>
            </div>

            <div className="body cluster">
              <fieldset>
                <legend>Clustering</legend>
              </fieldset>
            </div>

          </body>

        </div>
      </div>
    </div>
  );
}

export default App;
