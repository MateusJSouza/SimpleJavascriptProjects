import { useEffect, useRef } from "react";
import Switch from './components/Switch/Switch'
import './app.css'

function App() {
  const switchRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (switchRef.current && bgRef.current){
        const isLightTheme = switchRef.current.isLightTheme();
        if (isLightTheme) {
          bgRef.current.classList.remove('bg-light');
        } else {
          bgRef.current.classList.add('bg-light');
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <main ref={bgRef} className="app">
      <Switch ref={switchRef} />
    </main>
  );
}

export default App;
