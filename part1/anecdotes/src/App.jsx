import { useState } from 'react'
import Button from './components/Button'

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
  // XXX: maybe implement using object for fun?
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [maxIndex, setMaxIndex] = useState(0)

  const getNewRandInt = () => {
    const newRandInt = Math.floor(Math.random() * anecdotes.length)
    return (newRandInt !== selected ? newRandInt : getNewRandInt())
  }

  const displayNextAnecdote = () => {
    // random number corresponding to anecdote in array
    const randInt = getNewRandInt()
    setSelected(randInt)
  }

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    updateMaxVoted(newVotes)
  }

  // not elegant? Not tied to anecdote?
  const updateMaxVoted = (newVotes) => {
    if (newVotes[selected] > newVotes[maxIndex]) {
      setMaxIndex(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text='vote' onClick={voteAnecdote} />
      <Button text='next anecdote' onClick={displayNextAnecdote} />

      <h1>Anecdote with the most votes</h1>
      {/* PROBABLY BETTER WAY TO DO THIS? */}
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[maxIndex]} votes</p>
    </div>
  )
}

export default App