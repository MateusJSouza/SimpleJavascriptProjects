import { useImperativeHandle, forwardRef, useRef } from "react";

import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'

import './styles.css'

function Switch(props, forwardedRef) {
  const circleRef = useRef(null)
  useImperativeHandle(forwardedRef, () => ({
    isLightTheme() {
      return circleRef.current.classList.contains('light')
    },
  }));

  function toggle() {
    if(circleRef.current) {
      circleRef.current.classList.toggle('light')
    }
  }

  return (
    <>
      <div className="switcher-wrapper">
        <img src={moon} alt="moon" />
        <img src={sun} alt="sun" />
        <div className="circle-wrapper">
          <label ref={circleRef} htmlFor="switcher" className="circle"></label>
        </div>
      </div>
      <input onChange={toggle} type="checkbox" id="switcher" className="switcher"/>
    </>
  );
}

export default forwardRef(Switch);