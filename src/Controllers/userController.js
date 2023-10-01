// userController.js

// Sample array to simulate a database
const users = [];

// Create a new user
exports.create = (req, res) => {
  try {
    // Replace this with actual data from the request body
    const newUser = {
      username: 'JohnDoe',
      email: 'johndoe@example.com',
    };

    users.push(newUser);

    res.status(201).json({
      status: 'success',
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Read user data
exports.read = (req, res) => {
  try {
    // Replace this with actual data retrieval logic
    const userId = req.params.id; // Assuming you pass the user ID in the URL

    const user = users.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Update user data
exports.update = (req, res) => {
  try {
    // Replace this with actual data update logic
    const userId = req.params.id; // Assuming you pass the user ID in the URL

    // Find the user by ID and update their data
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    // Replace this with actual data from the request body
    user.username = 'UpdatedName';
    user.email = 'updatedemail@example.com';

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Delete a user
exports.delete = (req, res) => {
  try {
    // Replace this with actual data deletion logic
    const userId = req.params.id; // Assuming you pass the user ID in the URL

    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    // Remove the user from the array
    const deletedUser = users.splice(userIndex, 1);

    res.status(200).json({
      status: 'success',
      data: deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
