import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return <div className={s.postsWrap}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea ref={ newPostElement } name="" id="" cols="50" rows="5"></textarea>
      </div>
      <button onClick={ addPost }>Add post</button>
    </div>
    <div className={s.posts}>
      { postsElements }
    </div>
  </div>;
}

export default MyPosts;