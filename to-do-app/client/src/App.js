import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  const username = userEmail ? userEmail.split('@')[0] : '';
  const capitalizedUsername = username ? username.charAt(0).toUpperCase() + username.slice(1) : '';
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json = await response.json();
      setTasks(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);
  console.log(tasks);

  // Sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
    {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listName={"✍🏻 Daily To-Do List"} getData={getData} />
          <p className="user-email">Welcome back {capitalizedUsername}</p>
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
      <p className="copyright"> © Rohan Matre • 2024</p>
    </div>
  );
};

export default App;
