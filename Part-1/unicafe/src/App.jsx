import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.qualification} >
    {props.text}
  </button>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodFeedback = () => {
    const increasesGood = good + 1
    setGood(increasesGood)
    console.log('value good now', increasesGood)
  }

  const setNeutralFeedback = () => {
    const increasesNeutral = neutral + 1
    setNeutral(increasesNeutral)
    console.log('value neutral now', increasesNeutral)

  }

  const setBadFeedback = () => {
    const increasesBad = bad + 1
    setBad(increasesBad)
    console.log('value bad now', increasesBad)

  }


  return (
    <div>
     <h1>Give Feedback</h1>
     <Button qualification={setGoodFeedback} text='Good' />
     <Button qualification={setNeutralFeedback} text='Neutral'/>
      <Button qualification={setBadFeedback} text='Bad'/>

     <h2>Statistics</h2>
     <p>Good {good} </p>
     <p>Neutral {neutral} </p>
     <p>Bad {bad} </p>
    </div>
  )
}

export default App