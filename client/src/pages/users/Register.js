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
                {/* <br /><br/>
                <label className="register-position-text" htmlFor="password">Password:</label>
                <input 
                    className="register-position"
                    style={{borderRadius: '20px', textAlign: 'left'}}
                    type="position" 
                    id="position"
                    name="password"
                    onChange={handleChange}
                    value={form.position}
                />
                <br /><br /> */}
                {/* <br /><br/>
                <label style={{marginRight: '40px', paddingBottom: '20px', paddingRight: '10px'}} for="department">Select a Department:</label>
                <select style={{borderRadius: '20px', height: '30px', width: '250px'}} name="position" id="position">
                <option value="Chef">Chef</option>
                <option value="Writer">Writer</option>
                <option value="Developer">Developer</option>
                <option value="Employee" selected>Employee</option>
                </select> */}
                
                <button style={{marginTop: '30px'}}>Submit</button>
            </form>
        </div>
     );
}

export default Register;