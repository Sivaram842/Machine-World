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
      <div style={styles.card}>
        {status === "loading" && (
          <h2 style={styles.heading}>🔄 Verifying your email…</h2>
        )}

        {status === "success" && (
          <>
            <h2 style={{ ...styles.heading, color: "green" }}>
              ✅ Email Verified
            </h2>
            <p style={styles.text}>{message}</p>
            <p style={styles.subText}>Redirecting to login…</p>
          </>
        )}

        {status === "error" && (
          <>
            <h2 style={{ ...styles.heading, color: "red" }}>
              ❌ Verification Failed
            </h2>
            <p style={styles.text}>{message}</p>
            <button
              onClick={() => navigate("/login")}
              style={styles.button}
            >
              Go to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  card: {
    width: "100%",
    maxWidth: "480px",
    backgroundColor: "#ffffff",
    padding: "40px 24px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  heading: {
    fontSize: "clamp(20px, 5vw, 28px)",
    marginBottom: "16px",
  },
  text: {
    fontSize: "clamp(14px, 4vw, 16px)",
    marginBottom: "12px",
  },
  subText: {
    fontSize: "14px",
    color: "#555",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
  },
};

export default EmailVerify;