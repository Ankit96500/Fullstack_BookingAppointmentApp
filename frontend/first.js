console.log("JavaScript file is connected!");
// booking appointment app hit create,get api

document.addEventListener('DOMContentLoaded', () => {
    // console.log("HTML fully loaded, executing JavaScript");
    // console.log(crudCrudApiUrl);  // Check if the URL is correct

    fetchBlogs();
});

document.getElementById('blog-form').addEventListener('submit', handleFormSubmit);

let editingBlogId = null;

const blogData = {
    name: document.getElementById('name').value,
    phone_number: document.getElementById('phone_number').value,
    email: document.getElementById('email').value,
};

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const blogData = {
        name: document.getElementById('name').value,
        phone_no: document.getElementById('phone_number').value,
        email: document.getElementById('email').value,
    };
    // console.log('blog data',blogData);
    
    if (editingBlogId) {
        // Update the existing blog
        updateBlog(editingBlogId, blogData);
    } else {
        // Create a new blog
        createBlog(blogData);
    }

    // Reset the form fields
    document.getElementById('blog-form').reset();
}

// Fetch all blogs
function fetchBlogs() {
    // axios.get(crudCrudApiUrl)
    axios.get('http://localhost:3000/admin/users')
        .then(response => {
            // console.log('Full response:', response); // Log the full response object to understand the structure
            //  console.log('response.data:', response.data); // Log the response data

        // Check if response.data.products exists
        if (response.data ) {
            const blogs = response.data; // Ensure products exist in the response
            // console.log('Blogs:', blogs); // Log the products array
            
            document.getElementById('blog-list').innerHTML = ''; // Clear the blog list

            blogs.forEach(blog => displayBlogOnScreen(blog)); // Display each blog
            updateBlogCount(blogs.length); // Update the blog count
        } else {
            console.error('Products not found in the response!');
        }
        })
        .catch(error => console.log('Error fetching blogs:', error));
}

// // Create a new blog (POST)
function createBlog(blogData) {
    axios.post('http://localhost:3000/admin/add-user',blogData)
        .then(response => {
            // console.log('created data from server',response.data);
            
            displayBlogOnScreen(response.data);
            updateBlogCount();
        })
        .catch(error => console.log('Error posting blog:', error));
}

// // Display a blog on the screen
function displayBlogOnScreen(blog) {
    const blogList = document.getElementById('blog-list');
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    blogPost.setAttribute('data-id', blog.id);

    blogPost.innerHTML = `
        <h3>${blog.name}</h3>
        <p>${blog.phone_no}</p>
        <p>${blog.email}</p>
        <button onclick="editBlog('${blog.id}')">Edit</button>
        <button onclick="deleteBlog('${blog.id}')">Delete</button>
    `;

    blogList.appendChild(blogPost);
    updateBlogCount();
}

// // Update a blog (PUT)
function updateBlog(id, updatedData) {
    axios.put(`http://localhost:3000/admin/edit-user/${id}`, updatedData)
        .then(() => {
            fetchBlogs();  // Refresh the blog list after update
            editingBlogId = null;  // Reset editing state
        })
        .catch(error => console.log('Error updating blog:', error));
}

// // Edit a blog
function editBlog(id) {
    axios.get(`http://localhost:3000/admin/edit-user/${id}`)
        .then(response => {
            const blog = response.data;
            document.getElementById('name').value = blog.name;
            document.getElementById('phone_number').value = blog.phone_no;
            document.getElementById('email').value = blog.email;
            editingBlogId = id;  // Set the blog id to edit
        })
        .catch(error => console.log('Error fetching blog for edit:', error));
    }

// // Delete a blog (DELETE)
function deleteBlog(id) {
    // console.log('deleteded id',id);
    
    axios.delete(`http://localhost:3000/admin/delete-user/${id}`,id)
        .then(() => {
            fetchBlogs();  // Refresh the blog list after deletion
        })
        .catch(error => console.log('Error deleting blog:', error));
}

// // Update the blog count
function updateBlogCount(count = null) {
    const blogCountElement = document.getElementById('blogCount');
    const currentCount = count !== null ? count : document.querySelectorAll('.blog-post').length;
    blogCountElement.textContent = currentCount;
}



