import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post!", likesCount: 10}
  ];

    return <div className={s.postsWrap}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="50" rows="5"></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
      </div>
    </div>;
}

export default MyPosts;