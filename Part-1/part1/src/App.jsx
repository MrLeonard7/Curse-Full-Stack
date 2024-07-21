const Hello = (props) => {
  console.log(props);

  return (
    <div>
      <p>Hello {props.name}, yuo are {props.age} years old </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends.join(" y ")}</p>
    </div>
  )
}
export default App