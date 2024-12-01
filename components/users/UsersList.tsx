"use client";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/server/Users";

type User = {
    id: number;
    first_name: string;
    last_name: string;
    lang: string;
    phone_number: number;
    position: string;
    email: string;
};

const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        loadUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Users List</h1>
            <table
                style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    textAlign: "left",
                    border: "1px solid black",
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>First Name</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Last Name</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Language</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Phone Number</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Position</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{user.id}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{user.first_name}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{user.last_name}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{user.lang}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{user.phone_number}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{user.position}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UsersList;
