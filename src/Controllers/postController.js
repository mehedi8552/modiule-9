// postController.js

// Sample array to simulate a database for posts
const posts = [];

// Create a new post
exports.create = (req, res) => {
  try {
    // Replace this with actual data from the request body
    const newPost = {
      title: 'New Post',
      content: 'This is the content of the new post.',
    };

    posts.push(newPost);

    res.status(201).json({
      status: 'success',
      data: newPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Read post data
exports.read = (req, res) => {
  try {
    // Replace this with actual data retrieval logic
    const postId = req.params.id; // Assuming you pass the post ID in the URL

    const post = posts.find((p) => p.id === postId);

    if (!post) {
      return res.status(404).json({
        status: 'error',
        message: 'Post not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Update post data
exports.update = (req, res) => {
  try {
    // Replace this with actual data update logic
    const postId = req.params.id; // Assuming you pass the post ID in the URL

    // Find the post by ID and update its data
    const post = posts.find((p) => p.id === postId);

    if (!post) {
      return res.status(404).json({
        status: 'error',
        message: 'Post not found',
      });
    }

    // Replace this with actual data from the request body
    post.title = 'Updated Post Title';
    post.content = 'Updated content of the post.';

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Delete a post
exports.delete = (req, res) => {
  try {
    // Replace this with actual data deletion logic
    const postId = req.params.id; // Assuming you pass the post ID in the URL

    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'Post not found',
      });
    }

    // Remove the post from the array
    const deletedPost = posts.splice(postIndex, 1);

    res.status(200).json({
      status: 'success',
      data: deletedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
