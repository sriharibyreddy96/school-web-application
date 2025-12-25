import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import styled from 'styled-components';

const AdminDetails = () => {
    const [admin, setAdmin] = useState(null); // Admin details state
    const [users, setUsers] = useState([]);   // All users list state
    const [loadingAdmin, setLoadingAdmin] = useState(true);  // Loading state for admin
    const [loadingUsers, setLoadingUsers] = useState(true);  // Loading state for users list
    const [error, setError] = useState(null);

    // Fetch admin details based on the logged-in user's ID
    useEffect(() => {
        const fetchAdminDetails = async () => {
            try {
                // Get the token from localStorage
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('Not authenticated');
                    setLoadingAdmin(false);
                    return;
                }

                // Decode the token to get the logged-in user's ID
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id;

                // Make the API call to fetch admin details by userId
                const response = await axios.get(`http://localhost:5000/api/userauth/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                // Set the admin details in the state
                setAdmin(response.data);
            } catch (err) {
                setError('Failed to fetch admin details');
            } finally {
                setLoadingAdmin(false);
            }
        };

        const fetchAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/userauth/users', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });

                // Set the users list in the state
                setUsers(response.data);
            } catch (err) {
                setError('Failed to fetch users list');
            } finally {
                setLoadingUsers(false);
            }
        };

        fetchAdminDetails();
        fetchAllUsers();
    }, []);

    if (loadingAdmin || loadingUsers) return <p>Loading...</p>;
    if (error) return <ErrorMessage>{error}</ErrorMessage>;

    return (
        <Container>
            {/* Admin Section (Fixed) */}
            <AdminSection>
                <h2>Admin Details</h2>
                {admin ? (
                    <div>
                        <p><strong>Username:</strong> {admin.username}</p>
                        <p><strong>Email:</strong> {admin.email}</p>
                        <p><strong>Mobile:</strong> {admin.mobile}</p>
                    </div>
                ) : (
                    <p>No admin details found.</p>
                )}
            </AdminSection>

            {/* User Section (Scrollable) */}
            <UserSection>
                <h2>All Users List</h2>
                {users.length > 0 ? (
                    <UserList>
                        {users.map(user => (
                            <UserItem key={user._id}>
                                <p><strong>Username:</strong> {user.username}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Mobile:</strong> {user.mobile}</p>
                            </UserItem>
                        ))}
                    </UserList>
                ) : (
                    <p>No users found.</p>
                )}
            </UserSection>
        </Container>
    );
};

// =============================================================
// ======================== STYLES =============================
// =============================================================

// Styled components for the AdminDetails page
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const AdminSection = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed; /* Fix the admin section to the left */
  left: 30px;
  align-items: center;
  justify-content: center;
  width: 300px;
  background-color: white;
  color: black;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  height: calc(100vh - 100px); /* Full height minus padding */
  overflow-y: auto;
`;

const UserSection = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-left: 340px; /* Offset for the fixed AdminSection */
  height: calc(100vh - 40px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e1e1e1;
  }
  
  p {
    margin: 5px 0;
    font-size: 14px;
    color: #555;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
`;


export default AdminDetails;
