import React, { useEffect, useRef } from "react";
import "./material-gauge.css";

const Arc = () => {
  const myDiv = useRef(null);

  useEffect(()=>{
    if(myDiv.current){
      const gauge = new Gauge(myDiv.current);
      gauge.value(0.5);
    }
  },[])
  function Gauge(el) {
    var element, // Containing element for the info component
      data, // `.gauge__data` element
      needle, // `.gauge__needle` element
      value = 0.0, // Current gauge value from 0 to 1
      prop;

    var setElement = function (el) {
      // Keep a reference to the various elements and sub-elements
      element = el;
      data = element.querySelector(".gauge__data");
      needle = element.querySelector(".gauge__needle");
    };

    var setValue = function (x) {
      value = x;
      var turns = -0.5 + x * 0.5;
      data.style[prop] = "rotate(" + turns + "turn)";
      needle.style[prop] = "rotate(" + turns + "turn)";
    };
    function exports() {}

    // ##### Public API Methods

    exports.element = function (el) {
      if (!arguments.length) {
        return element;
      }
      setElement(el);
      return this;
    };

    exports.value = function (x) {
      if (!arguments.length) {
        return value;
      }
      setValue(x);
      return this;
    };
    var body = document.getElementsByTagName("body")[0];

    [
      "webkitTransform",
      "mozTransform",
      "msTransform",
      "oTransform",
      "transform",
    ].forEach(function (p) {
      if (typeof body.style[p] !== "undefined") {
        prop = p;
      }
    });
    if (arguments.length) {
      setElement(el);
    }

    return exports;
  }
  return (
    <div>
      <div class="gauge gauge--liveupdate" id="gauge" ref={myDiv}>
        <div class="gauge__container">
          <div class="gauge__marker"></div>
          <div class="gauge__background"></div>
          <div class="gauge__center"></div>
          <div class="gauge__data"></div>
          <div class="gauge__needle"></div>
        </div>
        <div class="gauge__labels mdl-typography__headline">
          <span class="gauge__label--low">No</span>
          <span class="gauge__label--spacer">450</span>
          <span class="gauge__label--high">Yes</span>
        </div>
      </div>
    </div>
  );
};

export default Arc;
