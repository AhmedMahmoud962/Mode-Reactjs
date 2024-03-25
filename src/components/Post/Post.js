function Post(props) {
  return (
    <div className="posts">
      {props.children}
      <h2 style={{ padding: "10px" }}>{props.MainTitle}</h2>
      <hr className="fasel" />
      <p style={{ padding: "10px" }}> {props.title}</p>
    </div>
  );
}

export default Post;
