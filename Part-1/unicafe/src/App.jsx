import { useState } from 'react'

const Display = props => <div> {props.value}  </div>

const Button = (props) => (
  <button onClick={props.qualification} >
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
     <h2>Statistics</h2>
     <Display value={'Good ' + props.good} />
     <Display value={'Neutral ' + props.neutral} />
     <Display value={'Bad ' + props.bad} />
     <Display value={'All ' + props.totalFeedback}  />
     <Display value={'Average ' + props.average} />
     <Display value={'Positive ' + props.positivePercentage + "%"} />

    </div>
  )
}

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
  const average = totalFeedback === 0 ? 0 : (good-bad)/totalFeedback
  const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
     <h1>Give Feedback</h1>
     <Button qualification={setGoodFeedback} text='Good' />
     <Button qualification={setNeutralFeedback} text='Neutral'/>
     <Button qualification={setBadFeedback} text='Bad'/>

     <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} average={average} positivePercentage={positivePercentage} />

    </div>
  )
}

export default App