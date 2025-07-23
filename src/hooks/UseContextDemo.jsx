import { createContext, useContext } from 'react';

// 1. Create the context
const UserContext = createContext();

// 2. A child component that uses the context
function UserProfile() {
    const user = useContext(UserContext);

    return (
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>User Profile</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Role:</strong> {user.role}</p>
        </div>
    );
}

// 3. The main demo component
function UseContextDemo() {
    const user = {
        name: 'Akro',
        role: 'React Learner',
    };

    return (
        <UserContext.Provider value={user}>
            <div style={{ padding: '1rem' }}>
                <h2>useContext Demo</h2>
                <UserProfile />
            </div>
        </UserContext.Provider>
    );
}

export default UseContextDemo;
