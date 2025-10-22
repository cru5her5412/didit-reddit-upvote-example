"use client";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <>
      <h1>An error has occured!</h1>
      <p>
        You may not have been logged in, and need to do so in order to make
        posts, vote on posts or most other things on the site.
        <br />
        Please Sign in or Sign up from the main site
      </p>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Return to main page
      </button>
    </>
  );
}
