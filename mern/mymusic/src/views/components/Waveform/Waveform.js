import React from "react";
import "./Waveform.scss";

export default React.memo(function Waveform({
  url,
  trackId,
  setReadyCallback,
}) {
  let containerEl = React.useRef();
  let [update, setupdate] = React.useState(false);
  let data = React.useRef();
  let canvas;

  React.useEffect(() => {
    let isMounted = true;
    if (url) {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((da) => {
          if (isMounted) {
            data.current = da;
            setupdate(!update);
          }
        });
    }
    return () => {
      // switch page trigger unmount
      // but url never change once mounted !!!!!
      // thus we do not have to put url as dependency
      isMounted = false;
    };
  }, [url]);

  React.useEffect(() => {
    if (!data.current) return;

    canvas = document.getElementById(`${trackId}_wave`);
    canvas.width = data.current.width / 2;
    canvas.height = data.current.height;
    //By default, the browser creates canvas elements with a width of 300 pixels and a height of 150 pixels.

    let context = canvas.getContext("2d");
    context.fillStyle = window.getComputedStyle(canvas).color;

    let samples = data.current.samples,
      v;

    for (let i = 0; i < canvas.width; i++) {
      v = samples[i * 2] / 2;
      context.fillRect(i, 0, 1, Math.floor(canvas.height / 2) - v);
      context.fillRect(i, Math.floor(canvas.height / 2) + v, 1, canvas.height);
    }

    setReadyCallback();
    //containerEl.current.appendChild(canvas);
    // dom operation will cause dom tree resort and rerender!!!!!!!!
    // try to avoid
  }, [update, data.current]);

  return (
    <div className="track__wave" ref={containerEl}>
      {/*console.log("render wave")*/}
      {data.current ? <canvas id={`${trackId}_wave`}></canvas> : null}
    </div>
  );
});

/*
Window is the main JavaScript object root, aka the global object in a browser, and it can also be treated as the root of the document object model. 
You can access it as window.

window.screen or just screen is a small information object about physical screen dimensions.

window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.

Since window is the global object, you can reference any properties of it with just the property name 
- so you do not have to write down window. 
- it will be figured out by the runtime.
*/
