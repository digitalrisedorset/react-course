import Axios from "axios";
import { useState } from 'react';

export default function RegisterForm() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await Axios.post('http://localhost:8080/register', {username, email, password});
            console.log('success');
        } catch (e) {
            console.log('error');
        }
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="username-register" className="text-muted mb-1">
                    <small>Username</small>
                </label>
                <input id="username-register" name="username" onChange={e => setUsername(e.target.value)} className="form-control" type="text"
                       placeholder="Pick a username" autoComplete="off"/>
            </div>
            <div className="form-group">
                <label htmlFor="email-register" className="text-muted mb-1">
                    <small>Email</small>
                </label>
                <input id="email-register" onChange={e => setEmail(e.target.value)} name="email"
                       className="form-control" type="text"
                       placeholder="you@example.com" autoComplete="off"/>
            </div>
            <div className="form-group">
                <label htmlFor="password-register" className="text-muted mb-1">
                    <small>Password</small>
                </label>
                <input id="password-register" name="password" onChange={e => setPassword(e.target.value)} className="form-control" type="password"
                       placeholder="Create a password"/>
            </div>
            <button type="submit" onClick={handleSubmit} className="py-3 mt-4 btn btn-lg btn-success btn-block">
                Sign up for ComplexApp
            </button>
        </form>
    )
}