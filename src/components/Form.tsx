import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Form() {
  const { register, handleSubmit } = useForm();

  function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Full Name:
        <br />
        <input type="text" />
      </label>

      <label>
        Email:
        <br />
        <input type="text" />
      </label>

      <label>
        Age:
        <br />
        <input type="number" />
      </label>

      <label>
        Password:
        <br />
        <input type="password" />
      </label>

      <label>
        Confirm Password:
        <br />
        <input type="password" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
