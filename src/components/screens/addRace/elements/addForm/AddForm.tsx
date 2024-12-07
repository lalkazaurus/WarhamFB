import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './AddForm.module.css'

export default function AddForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
  });

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Enter data:</h1>
        
        <label>
          Title:
          <input
            {...register('title', { 
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters long",
              },
            })}
          />
        </label>
        {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}

        <label>
          Image:
          <input
            {...register('image', {
              required: "Image is required",
              pattern: {
                value: /^[a-zA-Z0-9\s]+$/,
                message: 'Only letters, numbers, and spaces are allowed',
              },
            })}
          />
        </label>
        {errors.image && <p className={styles.errorMessage}>{errors.image.message}</p>}

        <label>
          Text:
          <input
            {...register('text', {
              required: "Text is required",
              minLength: {
                value: 10,
                message: "Text must be at least 10 characters long",
              },
            })}
          />
        </label>
        {errors.text && <p className={styles.errorMessage}>{errors.text.message}</p>}

        <button type="submit">Submit</button>
        <button type="reset" onClick={reset}>Reset</button>
      </form>
    </div>
  );
}
