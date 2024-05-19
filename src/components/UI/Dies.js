      <div className="row">
          <div className="col">
            <div id="output" className="output large">
              <section id="default-example" className="default-example">
                <div id="example-element" className="transition-all">
                  <div className="face front">1</div>
                  <div className="face back">2</div>
                  <div className="face right">3</div>
                  <div className="face left">4</div>
                  <div className="face top">5</div>
                  <div className="face bottom">6</div>
                </div>
              </section>
            </div>
          </div>
          <div className="col">
            <button onClick={() => moveDice("up")}>Up</button>
            <button onClick={() => moveDice("down")}>Down</button>
            <button onClick={() => moveDice("left")}>Left</button>
            <button onClick={() => moveDice("right")}>Right</button>
            <button onClick={() => moveDice("forward")}>Backward</button>
            <button onClick={() => moveDice("backward")}>Forward</button>
          </div>
          
        </div>