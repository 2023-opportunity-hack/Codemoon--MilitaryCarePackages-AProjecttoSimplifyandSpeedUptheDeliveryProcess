const mongoose = require('mongoose');
const User = require("../../models/User");
const jwt = require('jsonwebtoken');

const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password);
        const user = await User.findOne({username: username});

        console.log(user);
        if (!user) {
          res.status(401).json({ error: 'Authentication failed' });
          return;
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
          res.status(401).json({ error: 'Authentication failed' });
          return;
        }

        const token = jwt.sign({ userId: user._id }, 'your-secret-key-here', {
            expiresIn: '1h',
        });

        console.log(token);
        res.status(200).json({ token: token, role: user.role });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports =  loginController;