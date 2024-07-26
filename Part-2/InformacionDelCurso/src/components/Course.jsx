const Header = ({course}) => {
  return(
    <div>
      <h2> {course.name} </h2>
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
        course.map((part, index) => (
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
        course.reduce((s, p) => s + p.exercises, 0)} exercises  
      </strong> 
    </>
  )
}


const Course = ({course}) => {
  console.log('Course', course);
  return (
    <>
      <Header course={course} />
      <Content course={course.parts}/>
      <Total course={course.parts} />
      
    </>
  )
}

export default Course