import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { useEffect, useState } from 'react';


const App = () => {
  const userEmail = 'rohan@test.com'
  const [tasks, setTasks] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => getData, [])
  console.log(tasks)

  // Sort by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      <ListHeader listName = {'✍🏻 Daily To-Do List'} getData={getData} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
    </div>
  )
}

export default App
