import "./App.css";
import Display from "./screens/Display";
import RSidebar from "./components/rSidebar/RSidebar"
import "tailwindcss/dist/tailwind.css";

function App() {
  return (
    <div className="container">
      {/* <Display /> */}
      <RSidebar />
    </div>
  );
}

export default App;
