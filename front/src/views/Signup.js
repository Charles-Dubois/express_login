import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

export default function Sign() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters"),
    passwordConfirm: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must and should match"),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, reset, formState } = useForm(validationOpt);

  const { errors } = formState;

  function onFormSubmit(data) {
    //   console.log(JSON.stringify(data, null, 4));
    return false;
  }

  // * Variables d'état et fontions pour formulaire
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [surname, setSurname] = useState();
  const [birth, setBirth] = useState();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);
  const handleBirth = (e) => setBirth(e.target.value);

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstname", firstname);
    formData.append("surname", surname);
    formData.append("birth", birth);

    axios
      .post("/signup", {
        email,
        password,
        firstname,
        surname,
        birth,
      })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  function onFormSubmit(data) {
    //   console.log(JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <strong>Mail</strong>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          {...register("email")}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          onChange={(e) => handleEmail(e)}
        />
      </div>

      <div>
        <div>
          <label>
            <strong>Password</strong>
          </label>
          <input
            name="password"
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            onChange={(e) => handlePassword(e)}
          />
          <div>{errors.password?.message}</div>
        </div>
        <div>
          <label>
            <strong>Confirm Password</strong>
          </label>
          <input
            name="passwordConfirm"
            type="password"
            {...register("passwordConfirm")}
            className={`form-control ${
              errors.passwordConfirm ? "is-invalid" : ""
            }`}
          />
          <div>{errors.passwordConfirm?.message}</div>

          <div>
            <label>
              <strong>Firstname</strong>
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              {...register("firstname")}
              className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
              onChange={(e) => handleFirstname(e)}
            />
          </div>

          <div>
            <label>
              <strong>Surname</strong>
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              required
              {...register("surname")}
              className={`form-control ${errors.surname ? "is-invalid" : ""}`}
              onChange={(e) => handleSurname(e)}
            />
          </div>
        </div>

        <div>
          <label>
            <strong>Date of birth</strong>
          </label>
          <input
            type="date"
            id="birth"
            name="birth"
            required
            {...register("birth")}
            className={`form-control ${errors.birth ? "is-invalid" : ""}`}
            onChange={(e) => handleBirth(e)}
          />
        </div>

        <button type="submit">Register</button>
      </div>
    </form>
  );
}
