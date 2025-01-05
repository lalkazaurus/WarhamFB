import React from 'react'
import { useForm } from 'react-hook-form'
import { Race } from '../../../../../types/Race.tsx'
import styles from './AddForm.module.css'

export default function AddForm() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<Race>({
    mode: 'onChange',
  });

  const onSubmit = (data: Race) => {
    console.log(data);
    reset();
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Please enter data</h1>
        <input
          placeholder='Id'
          {...register('id', {
            required: true,
            pattern: /^[0-9]*$/
          })}
        />
        <input
          placeholder='Title'
          {...register('title', {
            required: true,
            minLength: 3,
            pattern: /^[A-Z][a-zA-Z0-9\s\.,!?'"()\-]*$/
          })}
        />
        <input
          placeholder='ImageURL'
          {...register('image', {
            required: true,
            pattern: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/[^\s]*)?$/
          })}
        />
        <textarea
          placeholder='Main information'
          {...register('text', {
            required: true,
            minLength: 20,
            pattern: /^[A-Z][a-zA-Z0-9\s\.,!?'"()\-]*$/
          })}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.submit} type="submit">Відправити</button>
          <button className={styles.reset} onClick={() => reset()}>Reset</button>
        </div>
      </form>
      </div>
  )
}