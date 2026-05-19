// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav style={{
//       background: "#0f172a",
//       padding: "12px 24px",
//       display: "flex",
//       alignItems: "center",
//       gap: "24px",
//       borderBottom: "1px solid #1e293b"
//     }}>
//       <span style={{ fontWeight: "bold", fontSize: "18px", color: "#38bdf8" }}>
//         ⛳ DataGolf
//       </span>
//       <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
//       <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
//       <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#0f172a",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #1e293b"
    }}>
      <span style={{ fontWeight: "bold", fontSize: "18px", color: "#38bdf8" }}>
        ⛳ DataGolf
      </span>
      <div style={{ marginLeft: "auto", display: "flex", gap: "24px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;