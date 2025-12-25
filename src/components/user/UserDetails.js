import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import styled from 'styled-components';

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch user details based on the logged-in user's ID
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('Not authenticated');
                    setLoading(false);
                    return;
                }

                // Decode token to get the logged-in user's ID
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id;

                // Fetch user details from the server
                const response = await axios.get(`http://localhost:5000/api/userauth/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setUser(response.data);  // Set user details in state
            } catch (err) {
                setError('Failed to fetch user details');
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    // Logout function
    const logout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        navigate('/login');  // Navigate to the login page
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <ErrorMessage>{error}</ErrorMessage>;

    return (
        <Container>
            <Title>User Details</Title>

            {user ? (
                <UserInfo>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Mobile:</strong> {user.mobile}</p>
                </UserInfo>
            ) : (
                <p>No user details found.</p>
            )}

            <Button onClick={logout}>Logout</Button>
        </Container>
    );
};


// =============================================================
// ======================== STYLES =============================
// =============================================================

// Styled components for UserDetails page
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  p {
    margin: 10px 0;
    font-size: 16px;
    color: #333;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
`;

export default UserDetails;
