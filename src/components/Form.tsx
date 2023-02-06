import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  const username = watch('username');
  const password = watch('password');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <br />
          <input type="text" {...register('username', { required: true })} />
        </label>
        {errors.username?.type === 'required' && (
          <span className="error-message">Name is required.</span>
        )}

        <label>
          Password:
          <br />
          <input type="password" {...register('password', { required: true, minLength: 4 })} />
        </label>
        {errors.password?.type === 'required' && (
          <span className="error-message">Password is required.</span>
        )}
        {errors.password?.type === 'minLength' && (
          <span className="error-message">Password must be more than 3 characters</span>
        )}

        <button type="submit">Register</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>

      {(username || password) && (
        <>
          <h2>Preview:</h2>
          <p>{username}</p>
          <p>{password}</p>
        </>
      )}
    </>
  );
}

type FormData = {
  username: string;
  password: string;
};
