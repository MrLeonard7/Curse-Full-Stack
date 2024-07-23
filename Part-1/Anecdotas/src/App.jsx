import { useState } from 'react'

const Display = (props) => <div> {props.text} </div>


const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} > {props.text} </button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
 const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const randomNumber = () => {
    const number = Math.floor(Math.random() * 7) +1
    setSelected(number)
  } 

  const increasesVotes = (index) =>{
    const copy = [...points]
    copy[index] += 1
    setPoints(copy)
  }
  console.log(points)

  const highestVotes = Math.max(...points)
  console.log(highestVotes)
  const highestVoteRate = points.indexOf(highestVotes)
  console.log(highestVoteRate)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Display text={anecdotes[selected]} />
      <Display text={'has ' + points[selected] + ' votes'} />
      <Button onClick={() => increasesVotes(selected)} text={'Vote'} />
      <Button onClick={randomNumber} text={'Next anecdote'} />

      <h2>Anecdotes with most votes</h2>
      <Display text={anecdotes[highestVoteRate]} />
      <Display text={'has ' + points[highestVoteRate] + ' votes'} />

    </div>
  )
}

export default App