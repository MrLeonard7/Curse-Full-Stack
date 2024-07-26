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

/*
const Total = ({course}) => {
  return (
    <div>
      <p>Total number of exercises {
        course.parts.reduce((sum, part) => sum + part.exercises, 0)
        } </p> 
    </div>
  )
}
*/

const Course = ({course}) => {
  console.log(course);
  return (
    <>
      <Header course={course} />
      <Content course={course}/>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App