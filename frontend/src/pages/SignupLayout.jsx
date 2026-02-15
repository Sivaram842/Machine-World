// pages/accounts/SignupLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function SignupLayout() {
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState({ day: "", month: "", year: "" });
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Outlet
            context={{
                email, setEmail,
                dob, setDob,
                firstName, setFirstName,
                lastName, setLastName,
                country, setCountry,
                password, setPassword
            }}
        />
    );
}
