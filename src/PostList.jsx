import React, { useEffect, useState } from "react";
import "./PostList.css";
import { auth, firestore } from "./config/firebase.js";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("finalProyect")
      .onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(newPosts);
      });
    return () => unsubscribe();
  }, []);

  return (
    <div className="post-list">
      <h2 className="post-list-title">Muro de publicaciones</h2>
      <a href="/AddPost" className="post-list-link">
        Agregar
      </a>
      {posts.map((post) => (
        <div key={post.id} className="post-list-item">
          <div className="post-list-item-body">
            <h5 className="post-list-item-title">
              {post.Nombre} {post.Apellido}
            </h5>
            <p className="post-list-item-text">{post.Comentario}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
