import { useState } from "react";
import { useUser } from "./useUser";

function App() {
  const { login } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      alert("Login successful");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        id="user-email"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        name="password"
        id="user-password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
