import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({text, value}) => {
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral;
  const average = (props.good + (props.bad * -1))/all;
  const percentage = (props.good * 100)/all;

  if (all===0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td><Statistic text={"good"} value={props.good}/></td>
        </tr>
        <tr>
          <td><Statistic text={"bad"} value={props.bad}/></td>
        </tr>
        <tr>
          <td><Statistic text={"neutral"} value={props.neutral}/></td>
        </tr>
        <tr>
          <td><Statistic text={"all"} value={all}/></td>
        </tr>
        <tr>
          <td><Statistic text={"average"} value={average}/></td>
        </tr>
        <tr>
          <td><Statistic text={"percentage"} value={percentage}/></td>
        </tr>
        </tbody>
      </table>
    </div>
  )

  
}

const Button = (props) => {
  return(
      <button onClick={props.action}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button action={() => setGood(good+1)} text="good"/>
      <Button action={() => setNeutral(neutral+1)} text="neutral"/>
      <Button action={() => setBad(bad+1)} text="bad"/>
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)