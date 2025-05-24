// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// src/App.js
// src/App.js
// src/App.js
import React from "react";
import SearchPage from "./pages/SearchPage/SearchPage";
import "./styles/global.css"; // Import global styles

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Internship Search</h1>
      </header>
      <SearchPage />
    </div>
  );
}

export default App;
