import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/474x/e6/22/c6/e622c61a5a68d7f1ebdcf2bf78a98af9.jpg" alt=""/>
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
    )
}

export default Post;