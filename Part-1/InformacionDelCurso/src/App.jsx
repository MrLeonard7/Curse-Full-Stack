const Header = ({course}) => {
  return(
    <div>
      <h1> {course.name} </h1>
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

const Content = ({ course }) => {
  return (
    <div>
      {
        course.parts.map((part, index) => (
          <Part key={index} name={part.name} exercises={part.exercises} />
        )

      )
      }

    </div>
  )
}

const Total = ({course}) => {
  return (
    <div>
      <p>Total number of exercises {
        course.parts.reduce((sum, part) => sum + part.exercises, 0)
        } </p> 1
    </div>
  )
}

const App = () => {
const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
    console.log(course);

  return (
    <div>
      <Header course={course} />

      <Content course={course} />

      <Total course={course}/>
    </div>
  )
}

export default App