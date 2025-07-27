import { account, ID } from '../conf/conf.js';

class AuthService {
    // Create account with email and password
    async createAccount({ email, password, name, phone }) {
        try {
            // Create user account
            const userAccount = await account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                // Automatically log in after account creation
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error('Appwrite service :: createAccount :: error', error);
            throw error;
        }
    }

    // Login with email and password
    async login({ email, password }) {
        try {
            const session = await account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            console.error('Appwrite service :: login :: error', error);
            throw error;
        }
    }

    // Get current user - handle unauthorized gracefully
    async getCurrentUser() {
        try {
            const user = await account.get();
            return user;
        } catch (error) {
            // Don't log error for unauthorized/guest users - this is expected
            if (error.code === 401 || error.message?.includes('missing scope') || error.message?.includes('guests')) {
                return null; // User not logged in - this is normal
            }
            return null;
        }
    }

    // Logout
    async logout() {
        try {
            await account.deleteSessions();
            return true;
        } catch (error) {
            // Don't log logout errors for guests - this is expected
            if (error.message?.includes('guests') || error.message?.includes('missing scope')) {
                return true; // Consider it successful
            }
            console.error('Appwrite service :: logout :: error', error);
            return false;
        }
    }

    // Send email verification
    async sendEmailVerification() {
        try {
            const verification = await account.createVerification(
                `${window.location.origin}/verify-email`
            );
            return verification;
        } catch (error) {
            console.error('Appwrite service :: sendEmailVerification :: error', error);
            throw error;
        }
    }

    // Verify email
    async verifyEmail(userId, secret) {
        try {
            const verification = await account.updateVerification(userId, secret);
            return verification;
        } catch (error) {
            console.error('Appwrite service :: verifyEmail :: error', error);
            throw error;
        }
    }

    // Send OTP to email
    async sendEmailOTP(email) {
        try {
            const response = await account.createEmailToken(ID.unique(), email, true); // true = security phrase enabled
            return response; // includes userId, secret, phrase
        } catch (error) {
            console.error('AuthService :: sendEmailOTP :: error', error);
            throw error;
        }
    }

    // Verify OTP and create session
    async verifyEmailOTP(userId, otp) {
        try {
            const session = await account.createSession(userId, otp);
            return session;
        } catch (error) {
            console.error('AuthService :: verifyEmailOTP :: error', error);
            throw error;
        }
    }

    // Password recovery
    async recoverPassword(email) {
        try {
            const recovery = await account.createRecovery(
                email,
                `${window.location.origin}/reset-password`
            );
            return recovery;
        } catch (error) {
            console.error('Appwrite service :: recoverPassword :: error', error);
            throw error;
        }
    }

    // Reset password
    async resetPassword(userId, secret, password, passwordAgain) {
        try {
            const recovery = await account.updateRecovery(
                userId,
                secret,
                password,
                passwordAgain
            );
            return recovery;
        } catch (error) {
            console.error('Appwrite service :: resetPassword :: error', error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;


