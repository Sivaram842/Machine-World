import { useLocation } from "react-router-dom";

export default function VerifyNotice() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div style={styles.container}>
      <h1>📩 Verify your email</h1>

      <p>
        We’ve sent a verification link to:
      </p>

      <p style={styles.email}>
        {email || "your email address"}
      </p>

      <p>
        Please check your inbox and click the link to activate your account.
      </p>

      <p style={{ marginTop: 20, color: "#777" }}>
        You cannot log in until your email is verified.
      </p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
  },
  email: {
    fontWeight: "bold",
    marginTop: 10,
  },
};
