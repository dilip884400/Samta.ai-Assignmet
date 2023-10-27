import React, { useState, useEffect } from 'react';
import styles from './UserInfo.module.css'

const UserInfo = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortedUsers, setSortedUsers] = useState([]);
    const [pastSearches, setPastSearches] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
            setSortedUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = () => {
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSortedUsers(filteredUsers);
        setPastSearches((prevSearches) => [...prevSearches, searchTerm]);
        setSearchTerm('');
        
    };

    const handleSortByName = () => {
        const sorted = [...sortedUsers].sort((a, b) => a.name.localeCompare(b.name));
        setSortedUsers(sorted);
    };

    return (
        <div className={styles.userBox}>
            <div className={styles.infoBox}>
                <h2>User Info</h2>
                <input className={styles.searchInput} type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <div>
                    <button onClick={handleSearch} className={styles.search}>Search</button>
                    <button onClick={handleSortByName} className={styles.sort}>Sort By Name</button>
                </div>
                <ul>
                    {sortedUsers.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.searchHistory}>
                <h3>Past Searches:</h3>
                <ul>
                    {pastSearches.map((search, index) => (
                        <li key={index}>{search}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserInfo;
