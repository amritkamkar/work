// Function to simulate authentication
function authenticateUser(username, password) {
    // Simulated logic to check if username and password are valid
    return username === 'exampleUser' && password === 'examplePassword';
}

// Function to handle successful login
function handleSuccessfulLogin(username) {
    console.log(`Welcome, ${username}! You have successfully logged in.`);
    // Additional actions after successful login, such as redirecting to another page, setting session data, etc.
}

// Function to handle login request
function login(username, password) {
    // Authenticate user
    const isAuthenticated = authenticateUser(username, password);
    if (isAuthenticated) {
        // If authentication is successful, handle successful login
        handleSuccessfulLogin(username);
    } else {
        // If authentication fails, display error message
        console.log('Invalid username or password. Please try again.');
    }
}

// Example usage
const username = 'exampleUser';
const password = 'examplePassword';
login(username, password);