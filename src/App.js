// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import { useEffect, useState } from "react";
// import { api } from "./api";

// function App() {
//   const [players, setPlayers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPlayers() {
//       try {
//         const res = await api.get("/");
//         setPlayers(res.data.data || []);
//       } catch (err) {
//         console.error("Failed to fetch players", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchPlayers();
//   }, []);

//   if (loading) {
//     return <div style={{ color: "white", padding: 20 }}>Loading players...</div>;
//   }

//   return (
//     <div style={{ minHeight: "100vh", background: "#020617", color: "white", padding: 20 }}>
//       <h1>Players</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Player ID</th>
//              <th>Player Name</th>
//             <th>World Rank</th>
//             <th>Data Golf Rank</th>
           
//           </tr>
//         </thead>
//         <tbody>
//           {players.map((p) => (
//             <tr key={p.player_name}>
//               <td>{p.dg_id}</td>
//               <td>{p.player_name}</td>
//               <td>{p.owgr_rank}</td>
//               <td>{p.datagolf_rank}</td>
//             </tr>

//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#020617", color: "white" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;