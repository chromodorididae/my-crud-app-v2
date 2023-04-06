import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userRegister } from "../../services/userService";

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}

function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = await userRegister(form)

        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)

        const user = await userInfo()
        setUser(user)

        navigate('/posts')
    }

    return ( 
        <div className="user-auth">
            <h1 className="register-title">REGISTER</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label className="register-username-text" htmlFor="username">Username:</label>
                <br />
                <input
                    className="register-username" 
                    style={{borderRadius: '20px'}}
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label className="register-email-text" htmlFor="email">Email:</label>
                <br />
                <input 
                    className="register-email"
                    style={{borderRadius: '20px'}}
                    type="email" 
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <br /><br />
                <label className="register-password-text" htmlFor="password">Password:</label>
                <br />
                <input 
                    className="register-password"
                    style={{borderRadius: '20px', textAlign: 'left'}}
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
     );
}

export default Register;