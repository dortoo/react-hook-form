import React from "react";
import "../App.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email('Invalid Email Format').required('Required'),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
}).required();
 

function Form() {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "Nelson",
      lastName: "Castanha",
      email: "sample@live.com"
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName")}
            type="text"
            name="firstName"
            placeholder="First Name..."
          />
          <p>{errors.firstName?.message}</p>

          <input
            {...register("lastName")}
            type="text"
            name="lastName"
            placeholder="Last Name..."
          />
          <p>{errors.lastName?.message}</p>

          <input
            {...register("email")}
            type="text"
            name="email"
            placeholder="Email..."
          />
          <p>{errors.email?.message}</p>

          <input
            {...register("age")}
            type="text"
            name="age"
            placeholder="Age..."
          />
          <p>{errors.age?.message}</p>

          <input
            {...register("password")}
            type="text"
            name="password"
            placeholder="Password..."
          />
          <p>{errors.password?.message}</p>

          <input
            {...register("confirmPassword")}
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password..."
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>

          <input
            type="submit"
            id="submit"
          />
        </form>
      </div>
    </div>
  )
}

export default Form;