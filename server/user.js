const MongoDB = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
    try {
        const {email, password, name, username} = req.body;

        // Check if the email is already registered
        const usersCollection = MongoDB.collection('users');
        const query = {email};
        const existingUser = await usersCollection.findOne(query);

        if (existingUser) {
            return res.status(400).json({error: 'Email already registered'});
        }

        // Encrypt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = {_id: email, email, password: hashedPassword, name, username};
        await usersCollection.insertOne(newUser);

        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({error: 'An error occurred while registering the user'});
    }
}
const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        // Check if the user exists
        const usersCollection = MongoDB.collection('users');
        const userWithEmail = await usersCollection.findOne({email});
        const userWithUsername = await usersCollection.findOne({username: email});
        const user = userWithEmail || userWithUsername
        if (!user) {
            return res.status(401).json({error: 'Invalid email or password'});
        }
        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({error: 'Invalid email or password'});
        }
        // Generate a JWT token
        const token = jwt.sign({userId: user._id}, 'secretKey', {expiresIn: '1h'});

        res.status(200).json({accessToken: token});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({error: 'An error occurred while logging in'});
    }
}
const userLogout = async (req, res) => {
    try {
        res.status(200).json({message: 'Logout successful'});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({error: 'An error occurred while logging out'});
    }
}
const getUserData = async (req, res) => {
    try {
        // Check if the email is already registered
        const usersCollection = MongoDB.collection('users');
        const query = {email: req.userId};
        const loggedInUser = await usersCollection.findOne(query);

        res.status(200).json({name: loggedInUser.name, email: loggedInUser.email, username: loggedInUser.username});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({error: 'An error occured while fetching user information'});
    }
}

module.exports = {
    userRegister,
    userLogin,
    userLogout,
    getUserData,
}
