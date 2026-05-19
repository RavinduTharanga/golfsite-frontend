import { useEffect, useState } from "react";
import { api } from "../api";

function Home() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const res = await api.get("/");
        setPlayers(res.data.data || []);
      } catch (err) {
        console.error("Failed to fetch players", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlayers();
  }, []);

  if (loading) return <div style={{ color: "white", padding: 20 }}>Loading players...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Players</h1>
      <table>
        <thead>
          <tr>
            <th>Player ID</th>
            <th>Player Name</th>
            <th>World Rank</th>
            <th>Data Golf Rank</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.player_name}>
              <td>{p.dg_id}</td>
              <td>{p.player_name}</td>
              <td>{p.owgr_rank}</td>
              <td>{p.datagolf_rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;