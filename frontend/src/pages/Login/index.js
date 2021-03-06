import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, SetEmail] = useState();

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email });
        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('dashboard');
    }

    return (
        <>
            <p>
            Offer <strong>spots</strong> to programmers and find <strong>talents</strong> to your bussiness
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                type="email"
                id="email" 
                placeholder="Your E-mail"
                onChange={event => SetEmail(event.target.value)}
            />
            <button className="btn" type="submit">Sign in</button>
            </form>
        </>
    )
}