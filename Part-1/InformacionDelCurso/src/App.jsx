const Header = (props) => {
  return(
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>
      <p> {name} {exercises} </p>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map((part, index) => (
          <Part key={index} name={part.name} exercises={part.exercises} />
        )

      )
      }

    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>Total number of exercises {
        parts.reduce((sum, part) => sum + part.exercises, 0)
        } </p>
    </div>
  )
}

const App = () => {
const course = 'Half Stack application development'
 const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
    console.log(course, parts);

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total parts={parts} />

    </div>
  )
}

export default App