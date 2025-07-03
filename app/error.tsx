'use client';
import { ErrorPageProps } from '@/types/interfaces';

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  console.error(error); // Optional: Log the error for debugging

  return (
    <div>
      <h1>Something went wrong!</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}