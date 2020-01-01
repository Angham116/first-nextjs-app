const titleStyle = {
  color: 'red',
}

const Title = props => {
  return (
    <>
      <p style={titleStyle}>page title {props.title}</p>
      <div>{props.children}</div>
    </>
  )
};

export default Title;
