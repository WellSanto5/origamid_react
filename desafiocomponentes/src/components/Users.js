import { useState, useEffect } from 'react'

export function Users() {

    const urlUsers = "https://fakestoreapi.com/users"

    const [ logins, setLogins ] = useState([])

    useEffect(() => {
        fetch(urlUsers)
        .then(response => response.json())
        .then(dados => setLogins(dados))
    }, [])

    return(
        <>
            <ul>
                {logins.map((user) => (
                    <div className="user">
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <br />
                    </div>
                ))}
            </ul>
        </>
    )
}