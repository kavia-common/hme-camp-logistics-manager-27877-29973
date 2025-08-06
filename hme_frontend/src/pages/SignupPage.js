import React from "react";
import SignupForm from "../components/SignupForm";

/**
 * Signup page rendering the camp signup form.
 * PUBLIC_INTERFACE
 *
 * Displays the playful, minimalistic signup form for new Burners and Admins within the dashboard layout.
 */
function SignupPage() {
  return (
    <section>
      <SignupForm />
    </section>
  );
}

export default SignupPage;
