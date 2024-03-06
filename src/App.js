import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from "./components/AppointmentInfo"

function App() {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredList = list.filter(item => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    )
  }).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order
    )
  });

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-3xl font-bold flex items-center mb-3">
        <BiCalendar className="mr-2 inline-block text-5xl" />
        Your Appointments
      </h1>
      <AddAppointment
        onSendAppt={myAppt => setList([...list, myAppt])}
        lastId={list.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
      />
      <Search
        query={query}
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}
      />

      <ul className="divide-y divide-gray-200">
        {
          filteredList.map(item => {
            return <AppointmentInfo key={item.id} item={item} onDeleteItem={
              itemID => {
                setList(list.filter(item => item.id !== itemID))
              }
            } />
          })
        }
      </ul>
    </div>
  );
}

export default App;
