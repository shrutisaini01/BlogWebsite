document.addEventListener("DOMContentLoaded", () => {
    fetchAndDisplayBlogs();

    // Assuming you have a form submission event
    const blogForm = document.getElementById("blogForm");
    blogForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            title: document.getElementById("title").value,
            content: document.getElementById("content").value,
            author: document.getElementById("author").value,
            image: document.getElementById("image").value,
        };

        // Make a POST request to add the new blog post
        await fetch("http://localhost:8080/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // After successfully adding a new post, fetch and display blogs
        await fetchAndDisplayBlogs();
    });

    // Fetch and display blogs function
    async function fetchAndDisplayBlogs() {
        try {
            const response = await fetch("http://localhost:8080/Blogs");
            const blogs = await response.json();

            // Update your front-end to display the fetched blogs
            const blogListContainer = document.getElementById("blogList");
            blogListContainer.innerHTML = ""; // Clear existing entries

            blogs.forEach((blog) => {
                const blogElement = document.createElement("div");
                blogElement.innerHTML = `
                    <h3>${blog.title}</h3>
                    <p>${blog.content}</p>
                    <p>Author: ${blog.author}</p>
                    <img src="${blog.image}" alt="${blog.title}" style="max-width: 100%; height: auto;">
                    <button class="delete-btn" data-blog-id="${blog._id}">Delete</button>
                `;
                blogListContainer.appendChild(blogElement);
            });

            // Add event listener for delete buttons
            const deleteButtons = document.querySelectorAll(".delete-btn");
            deleteButtons.forEach((button) => {
                button.addEventListener("click", async () => {
                    const blogId = button.getAttribute("data-blog-id");
                    await deleteBlogPost(blogId);
                    // After successfully deleting a post, fetch and display blogs
                    await fetchAndDisplayBlogs();
                });
            });
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }
