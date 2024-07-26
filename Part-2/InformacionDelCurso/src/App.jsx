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
    <>
      <strong>Total of {
        course.parts.reduce((s, p) => s + p.exercises, 0)} exercises  
      </strong> 
    </>
  )
}


const Course = ({course}) => {
  console.log(course);
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App