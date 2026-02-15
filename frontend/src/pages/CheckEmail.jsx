import { useState } from "react";

export default function TestMail() {
    const [loading, setLoading] = useState(false);

    const sendTestEmail = async () => {
        setLoading(true);

        const res = await fetch("http://localhost:5000/send-email-test", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: "sivaram.p842@gmail.com",
                name: "Sivaram",
            }),
        });

        const data = await res.json();
        alert(data.message);

        setLoading(false);
    };

    return (
        <button
            onClick={sendTestEmail}
            disabled={loading}
            style={{ padding: "10px 20px", cursor: "pointer" }}
        >
            {loading ? "Sending..." : "Send Test Email"}
        </button>
    );
}
