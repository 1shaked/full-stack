import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { addUser } from './usersSlice';
import { addPost } from './postsSlice';

export default function ReduxComponent() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <div>
      {/* Display users */}
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Display posts */}
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {/* Add a user */}
      <button onClick={() => dispatch(addUser({ id: 1, name: 'John' }))}>
        Add User
      </button>

      {/* Add a post */}
      <button
        onClick={() => dispatch(addPost({ id: 1, title: 'Redux', content: 'Learning Redux with TypeScript' }))}
      >
        Add Post
      </button>
    </div>
  );
};

