import { useState } from 'react'

const StatisticsLine = (props) => {
  return(
      <tr>
        <td>    
          {props.text} 
        </td>
        <td>
          {props.value}
        </td>
      </tr> 
  )
}

const Button = (props) => (
  <button onClick={props.qualification} >
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.totalFeedback === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        No Feedback given
      </div>
    )
    
  } 
  else {
      return (
      <div>
        <h2>Statistics</h2>
        <table>
          <StatisticsLine text={'Good '} value={props.good} />
          <StatisticsLine text={'Neutral'} value={+ props.neutral} />
          <StatisticsLine text={'Bad '} value={props.bad} />
          <StatisticsLine text={'All '} value={props.totalFeedback}  />
          <StatisticsLine text={'Average '} value={props.average} />
          <StatisticsLine text={'Positive '} value={props.positivePercentage + "%"} />
        </table>

      </div>
    )
  }
  
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