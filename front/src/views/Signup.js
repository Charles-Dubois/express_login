import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function App() {
  // * Variables d'état et fontions pour formulaire
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [surname, setSurname] = useState();
  const [birth, setBirth] = useState();
  const [passwordFinal, setPasswordFinal] = useState();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);
  const handleBirth = (e) => setBirth(e.target.value);

  return (
    <form onSubmit={handleSubmit()}>
      <label for="email">Mail</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Write here"
        onChange={(e) => handleEmail(e)}
      />
      <label for="password">Enter your password</label>
      <input
        {...register("password", {
          required: "this is required",
          minLength: {
            value: 8,
            message: "8 charaters min",
          },
        })}
        type="password"
        id="password"
        name="password"
        placeholder="Write here"
        onChange={(e) => handlePassword(e)}
      />
      {<span>{errors.password?.message}</span>}

      <label for="confirmPassword">Confirm your password</label>
      <input
        {...register("confirmPassword", {
          required: "this is required",
          minLength: {
            value: 8,
            message: "8 charaters min",
          },
        })}
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Write here"
        onChange={(e) => handleConfirmPassword(e)}
      />
      {<span>{errors.confirmPassword?.message}</span>}

      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        required
        placeholder="Write here"
        onChange={(e) => handleFirstname(e)}
      />
      <label for="surname">Surname</label>
      <input
        type="text"
        id="surname"
        name="surname"
        required
        placeholder="Write here"
        onChange={(e) => handleSurname(e)}
      />
      <label for="birth">Date of birth</label>
      <input
        type="date"
        id="birth"
        name="birth"
        required
        onChange={(e) => handleBirth(e)}
      />
      <button>Send</button>
    </form>
  );
}

{
  /* <label for="password">Enter your password</label>
<input
  type="password"
  id="password"
  name="password"
  required
  placeholder="Write here"
  onChange={(e) => handlePassword(e)}
/> */
}

{
  /* <input
type="password"
id="confirmPassword"
name="confirmPassword"
required
placeholder="Write here"
onChange={(e) => handleConfirmPassword(e)}
/> */
}
