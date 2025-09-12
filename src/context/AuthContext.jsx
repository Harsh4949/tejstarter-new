import React, { createContext, useContext, useEffect, useState } from 'react';
import authService from '../appwrite/auth';
import databaseService from '../appwrite/database';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            setLoading(true);
            const userData = await authService.getCurrentUser();
            if (userData) {
                setUser(userData);
                // Get user profile from database
                const profile = await databaseService.getUserProfile(userData.$id);
                setUserProfile(profile);
            } else {
                setUser(null);
                setUserProfile(null);
            }
        } catch (error) {
            setUser(null);
            setUserProfile(null);
        } finally {
            setLoading(false);
        }
    };

    const signup = async (formData) => {
        try {
            setLoading(true);
            
            // Only logout if there's an active session
            if (user) {
                await authService.logout();
            }
            
            // Upload file if present
            let fileId = null;
            const fileField = formData.role === 'Student' ? 'resume' : 'portfolio';
            if (formData[fileField]) {
                const uploadedFile = await databaseService.uploadFile(formData[fileField]);
                fileId = uploadedFile.$id;
            }

            // Create user account
        
            if (userData) {
                const currentUser = await authService.getCurrentUser();
                
                // Create user profile in database
                const profileData = {
                    userId: currentUser.$id,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password,
                    role: formData.role,
                    location: formData.location,
                    agree: formData.agree,
                    dob: formData.dob,
                    educationLevel: formData.educationLevel,
                    subLevel: formData.subLevel,
                    majorField: formData.majorField,
                    college: formData.college,
                    companyUrl: formData.companyUrl,
                };

                // Add file ID based on role
                if (fileId) {
                    if (formData.role === 'Student') {
                        profileData.resumeId = fileId;
                    } else {
                        profileData.portfolioId = fileId;
                    }
                }

                const profile = await databaseService.createUserProfile(profileData);
                setUser(currentUser);
                setUserProfile(profile);
                
                return { user: currentUser, profile };
            }
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const login = async ({ email, password }) => {
        try {
            setLoading(true);
            
            // Only logout if there's an active session
            if (user) {
                await authService.logout();
            }
            
            const userData = await authService.login({ email, password });
            if (userData) {
                const currentUser = await authService.getCurrentUser();
                setUser(currentUser);
                // Get user profile
                const profile = await databaseService.getUserProfile(currentUser.$id);
                setUserProfile(profile);
                return { user: currentUser, profile };
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            // Only attempt logout if user is logged in
            if (user) {
                await authService.logout();
            }
            setUser(null);
            setUserProfile(null);
            return true;
        } catch (error) {
            // Even if logout fails, clear local state
            setUser(null);
            setUserProfile(null);
            return true; // Return true anyway to allow navigation
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async (updatedData) => {
        try {
            if (userProfile && userProfile.$id) {
                const updatedProfile = await databaseService.updateUserProfile(
                    userProfile.$id,
                    updatedData
                );
                setUserProfile(updatedProfile);
                return updatedProfile;
            }
        } catch (error) {
            console.error('Update profile error:', error);
            throw error;
        }
    };

    const value = {
        user,
        userProfile,
        loading,
        signup,
        login,
        logout,
        updateProfile,
        getCurrentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;