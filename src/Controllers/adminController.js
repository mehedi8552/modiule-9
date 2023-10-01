// adminController.js

// Sample array to simulate a database for admin data
const admins = [];

// Create a new admin
exports.create = (req, res) => {
  try {
    // Replace this with actual data from the request body
    const newAdmin = {
      username: 'AdminUser',
      email: 'admin@example.com',
    };

    admins.push(newAdmin);

    res.status(201).json({
      status: 'success',
      data: newAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Read admin data
exports.read = (req, res) => {
  try {
    // Replace this with actual data retrieval logic
    const adminId = req.params.id; // Assuming you pass the admin ID in the URL

    const admin = admins.find((a) => a.id === adminId);

    if (!admin) {
      return res.status(404).json({
        status: 'error',
        message: 'Admin not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: admin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Update admin data
exports.update = (req, res) => {
  try {
    // Replace this with actual data update logic
    const adminId = req.params.id; // Assuming you pass the admin ID in the URL

    // Find the admin by ID and update their data
    const admin = admins.find((a) => a.id === adminId);

    if (!admin) {
      return res.status(404).json({
        status: 'error',
        message: 'Admin not found',
      });
    }

    // Replace this with actual data from the request body
    admin.username = 'UpdatedAdmin';
    admin.email = 'updatedadmin@example.com';

    res.status(200).json({
      status: 'success',
      data: admin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Delete an admin
exports.delete = (req, res) => {
  try {
    // Replace this with actual data deletion logic
    const adminId = req.params.id; // Assuming you pass the admin ID in the URL

    const adminIndex = admins.findIndex((a) => a.id === adminId);

    if (adminIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'Admin not found',
      });
    }

    // Remove the admin from the array
    const deletedAdmin = admins.splice(adminIndex, 1);

    res.status(200).json({
      status: 'success',
      data: deletedAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
