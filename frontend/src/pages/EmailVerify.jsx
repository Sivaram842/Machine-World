import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EmailVerify = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const calledRef = useRef(false);

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token || calledRef.current) return;
    calledRef.current = true;

    const verify = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/users/verify-email/${token}`;
        console.log("🔗 Calling backend:", url);

        const res = await axios.get(url);

        setStatus("success");
        setMessage(res.data.message || "Email verified!");

        setTimeout(() => navigate("/login"), 2500);
      } catch (err) {
        console.error("❌ Verification failed:", err);
        setStatus("error");
        setMessage(
          err.response?.data?.message ||
            "Invalid or expired verification link"
        );
      }
    };

    verify();
  }, [token, navigate]);

  return (
    <div style={styles.container}>
      {status === "loading" && <h2>🔄 Verifying your email…</h2>}

      {status === "success" && (
        <>
          <h2 style={{ color: "green" }}>✅ Email Verified</h2>
          <p>{message}</p>
          <p>Redirecting to login…</p>
        </>
      )}

      {status === "error" && (
        <>
          <h2 style={{ color: "red" }}>❌ Verification Failed</h2>
          <p>{message}</p>
          <button onClick={() => navigate("/login")} style={styles.button}>
            Go to Login
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default EmailVerify;
