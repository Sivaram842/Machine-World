import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");

    return (
        <Outlet context={{ email, setEmail }} />
    );
}
