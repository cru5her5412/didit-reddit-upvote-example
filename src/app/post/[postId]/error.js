"use client";

import { LoginButton } from "@/components/LoginButton";

export default function ErrorPage() {
  return (
    <>
      <h1>An error has occured!</h1>
      <p>
        You may not have been logged in, and need to do so in order to vote on
        posts.
        <br />
        Please Sign in or Sign up below
      </p>
      <LoginButton />
    </>
  );
}
