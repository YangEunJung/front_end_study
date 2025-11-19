function Post(props){
    return(
        <div key={props.id}>
          <p>{props.post}</p>
        </div>
    )
}

export default Post