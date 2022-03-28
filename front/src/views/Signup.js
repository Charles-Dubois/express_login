import { Link } from "react-router-dom";

export default function App() {
  return (
    <form>
      <input type="email" required placeholder="Mail" />
      <input type="password" required placeholder="Password" />
      <input type="password" required placeholder="Confirm your password" />
      <input type="text" required placeholder="First name" />
      <input type="text" required placeholder="Sur name" />
      <button>clickm me</button>
    </form>
  );
}
