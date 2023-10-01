// subAdminController.js

// Sample array to simulate a database for sub-admin data
const subAdmins = [];

// Create a new sub-admin
exports.create = (req, res) => {
  try {
    // Replace this with actual data from the request body
    const newSubAdmin = {
      username: 'SubAdminUser',
      email: 'subadmin@example.com',
    };

    subAdmins.push(newSubAdmin);

    res.status(201).json({
      status: 'success',
      data: newSubAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Read sub-admin data
exports.read = (req, res) => {
  try {
    // Replace this with actual data retrieval logic
    const subAdminId = req.params.id; // Assuming you pass the sub-admin ID in the URL

    const subAdmin = subAdmins.find((sa) => sa.id === subAdminId);

    if (!subAdmin) {
      return res.status(404).json({
        status: 'error',
        message: 'Sub-admin not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: subAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Update sub-admin data
exports.update = (req, res) => {
  try {
    // Replace this with actual data update logic
    const subAdminId = req.params.id; // Assuming you pass the sub-admin ID in the URL

    // Find the sub-admin by ID and update their data
    const subAdmin = subAdmins.find((sa) => sa.id === subAdminId);

    if (!subAdmin) {
      return res.status(404).json({
        status: 'error',
        message: 'Sub-admin not found',
      });
    }

    // Replace this with actual data from the request body
    subAdmin.username = 'UpdatedSubAdmin';
    subAdmin.email = 'updatedsubadmin@example.com';

    res.status(200).json({
      status: 'success',
      data: subAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Delete a sub-admin
exports.delete = (req, res) => {
  try {
    // Replace this with actual data deletion logic
    const subAdminId = req.params.id; // Assuming you pass the sub-admin ID in the URL

    const subAdminIndex = subAdmins.findIndex((sa) => sa.id === subAdminId);

    if (subAdminIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'Sub-admin not found',
      });
    }

    // Remove the sub-admin from the array
    const deletedSubAdmin = subAdmins.splice(subAdminIndex, 1);

    res.status(200).json({
      status: 'success',
      data: deletedSubAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
