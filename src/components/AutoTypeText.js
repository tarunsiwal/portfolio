import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const AutoTypeText = () => {
  const typedElementRef = useRef(null);
  const typedInstanceRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "नमस्ते",
        "Hello",
        "こんにちは",
      ],
      typeSpeed: 120,
      backDelay: 1000,
      loop: true,
      contentType: "html",
      loopCount: false,
      callback: () => {
        foo();
      },
      resetCallback: () => {
        newTyped();
      },
    };

    typedInstanceRef.current = new Typed(typedElementRef.current, options);

    return () => {
      // Clean up the Typed instance on unmount
      typedInstanceRef.current.destroy();
    };
  }, []);

  const newTyped = () => {
    console.log("New Typed");
  };

  const foo = () => {
    console.log("Callback");
  };

  const handleReset = () => {
    if (typedInstanceRef.current) {
      typedInstanceRef.current.reset();
    }
  };

  return (
    // <div className="wrap">
    //   <div className="type-wrap">
    //     <div id="typed-strings" style={{ display: "none" }}>
    //       <span>
    //         Typed.js is a <strong>jQuery</strong> plugin.
    //       </span>
    //       <p>
    //         It <em>types</em> out sentences.
    //       </p>
    //       <p>And then deletes them.</p>
    //       <p>Try it out!</p>
    //     </div>
    //     <span
    //       ref={typedElementRef}
    //       id="typed"
    //       style={{ whiteSpace: "pre" }}
    //     ></span>
    //   </div>

    //   {/* <button className="reset" onClick={handleReset}>
    //     Reset
    //   </button> */}
    // </div>
    <span
    ref={typedElementRef}
    id="typed"
    style={{ whiteSpace: "pre" }}
  ></span>
  );
};

export default AutoTypeText;
