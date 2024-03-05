import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from "./components/AppointmentInfo"

import list from "./data.json"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-3xl font-bold flex items-center mb-3">
        <BiCalendar className="mr-2 inline-block text-5xl" />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {
          list.map(item => {
            return <AppointmentInfo key={item.id} item={item} />
          })
        }
      </ul>
    </div>
  );
}

export default App;
