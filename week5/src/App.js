import { useState, useEffect } from 'react';
import EmptyData from './EmptyData.js';
import Title from './Title.js';
import Post from './Post.js';

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users1/1/posts')
    .then((response) => response.json())
    .then((json) => setPost(json));
  }, []);
  if (post.length === 0) {
    return (
      <EmptyData />
    );
  }
  return (
    <div>
      {post.map((posts) => (
        <div key={posts.id}>
          <h2>Title: 
            <Title title={posts.title}/>
          </h2>
          <Post post={posts.body} />
        </div>
      ))}
    </div>
  );
}
 export default App