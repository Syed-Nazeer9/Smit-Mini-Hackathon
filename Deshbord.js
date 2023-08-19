import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {  getFirestore, collection, addDoc, getDocs, doc, setDoc, updateDoc,serverTimestamp} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyBnvozBhQ2luHTzuPNtALa_jBg1xEdsQYg",
  authDomain: "smit-mini-hackathon-77552.firebaseapp.com",
  projectId: "smit-mini-hackathon-77552",
  storageBucket: "smit-mini-hackathon-77552.appspot.com",
  messagingSenderId: "696268476691",
  appId: "1:696268476691:web:a121f634c495e285e7cae6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


  // Add event listener to the "Addpost" button
  const addPostButton = document.getElementById("Addpost");
  addPostButton.addEventListener("click", addPost);
  
  // Function to add a new blog post
  async function addPost() {
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("Desc");
  
    const title = titleInput.value;
    const desc = descInput.value;
  
    if (!title || !desc) {
      alert("Title and description are required.");
      return;
    }
  
    try {
      const postObj = {
        title,
        desc,
        timestamp: serverTimestamp(),
      };
  
      await addDoc(collection(db, "posts"), postObj);
      alert("Blog post added successfully.");
      
      // Clear input fields
      titleInput.value = "";
      descInput.value = "";
  
      // Refresh blog posts
      loadBlogPosts();
    } catch (error) {
      console.error("Error adding blog post:", error);
      alert("An error occurred while adding the blog post.");
    }
  }
  
  // Function to load and display blog posts
  async function loadBlogPosts() {
    const blogCont = document.getElementById("blogCont");
    blogCont.innerHTML = ""; // Clear existing content
  
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        const postHTML = `
          <div class="myBlogs">
            <div>
              <h2>${post.title}</h2>
              <p>${post.desc}</p>
              <button onclick="deletePost('${doc.id}')">Delete</button>
              <button onclick="editPost('${doc.id}', '${post.title}', '${post.desc}')">Edit</button>
            </div>
          </div>
        `;

        blogCont.innerHTML += postHTML;
      });
    } catch (error) {
      console.error("Error loading blog posts:", error);
    }
  }
  
  // Function to delete a blog post
  async function deletePost(postId) {
    try {
      await deleteDoc(doc(db, "posts", postId));
      alert("Blog post deleted successfully.");
      loadBlogPosts();
    } catch (error) {
      console.error("Error deleting blog post:", error);
      alert("An error occurred while deleting the blog post.");
    }
  }
  
  // Function to edit a blog post
  async function editPost(postId, title, desc) {
    const updatedTitle = prompt("Enter updated title:", title);
    const updatedDesc = prompt("Enter updated description:", desc);
  
    if (updatedTitle !== null && updatedDesc !== null) {
      try {
        await updateDoc(doc(db, "posts", postId), {
          title: updatedTitle,
          desc: updatedDesc,
        });
        alert("Blog post updated successfully.");
        loadBlogPosts();
        
      } catch (error) {
        console.error("Error updating blog post:", error);
        alert("An error occurred while updating the blog post.");
      }
    }
  }
  
  // Load initial blog posts when the page loads
  window.addEventListener("load", () => {
    loadBlogPosts();
  });
  

  const logutBtn = document.getElementById("logout-btn");
  addPostButton.addEventListener("click", logout-btn);

  console.log("logout-btn" ,logut)


