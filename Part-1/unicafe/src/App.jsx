import { useState } from 'react'

const Display = props => <div> {props.value}  </div>

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

  const totalFeedback = good + neutral + bad
  const average = (good - bad)/totalFeedback
  const positivePercentage = (good / totalFeedback) * 100

  return (
    <div>
     <h1>Give Feedback</h1>
     <Button qualification={setGoodFeedback} text='Good' />
     <Button qualification={setNeutralFeedback} text='Neutral'/>
     <Button qualification={setBadFeedback} text='Bad'/>

     <h2>Statistics</h2>
     <Display value={'Good ' + good} />
     <Display value={'Neutral ' + neutral} />
     <Display value={'Bad ' + bad} />
     <Display value={'All ' + totalFeedback}  />
     <Display value={'Average ' + average} />
     <Display value={'Positive ' + positivePercentage + "%"} />

    </div>
  )
}

export default App