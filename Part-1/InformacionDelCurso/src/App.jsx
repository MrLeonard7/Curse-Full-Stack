const Header = (props) => {
  return(
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = ({parts, exercises}) => {
  return (
    <div>
      <p> {parts} {exercises} </p>
    </div>
  )
}

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <Part parts={part1} exercises={exercises1} />
      <Part parts={part2} exercises={exercises2} />
      <Part parts={part3} exercises={exercises3} />

    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}

const App = () => {
const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

    console.log(course, part1, part2, part3);

  return (
    <div>
      <Header course={course} />

      <Content part1={part1.name} exercises1={part1.exercises}
        part2={part2.name} exercises2={part2.exercises}
        part3={part3.name} exercises3={part3.exercises} />

      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App