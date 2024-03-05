import { BiTrash } from "react-icons/bi";

const AppointmentInfo = ({ item }) => {
    return (
        <li className="px-3 py-3 flex items-start">
          <button type="button"
            className="p-1.5 mr-1.5 mt-1 rounded text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <BiTrash /></button>
          <div className="flex-grow">
            <div className="flex items-center">
              <span className="flex-none font-medium text-2xl ">{item.petName}</span>
              <span className="flex-grow text-right">{item.aptDate}</span>
            </div>
            <div><b className="font-bold ">Owner:</b> {item.ownerName}</div>
            <div className="leading-tight">{item.aptNotes}</div>
          </div>
        </li>
      )
}

export default AppointmentInfo;