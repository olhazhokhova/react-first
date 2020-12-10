import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post!", likesCount: 10},
    {id: 3, message: "bla bla bla", likesCount: 100},
    {id: 4, message: "More messages", likesCount: 33}
  ];

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return <div className={s.postsWrap}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="50" rows="5"></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>;
}

export default MyPosts;