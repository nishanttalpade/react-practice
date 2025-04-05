import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

function Logos () {
  return (
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
  );
}

export default Logos;
// This code defines a React functional component named Logos. It imports two images (reactLogo and viteLogo) and renders them as links to their respective websites. The images are styled with CSS classes "logo" and "react". The component is then exported for use in other parts of the application.