import { Link } from "react-router-dom";

const Notes = () => {
  const categories = [
    {name: "Class-IX", color: "bg-pink-300 hover:bg-red-300"},
    {name: "Class-X", color: "bg-pink-300 hover:bg-blue-300"},
    {name: "Class-XI", color: "bg-pink-300 hover:bg-orange-300"},
    {name: "Class-XII", color: "bg-pink-300 hover:bg-green-300"},
    {name: "BCA", color: "bg-pink-300 hover:bg-yellow-300"},
    {name: "B-Tech CS", color: "bg-pink-300 hover:bg-purple-300"},
  ];

  return(
    <div className="bg-purple-200 p-[10%] grid grid-cols-3 gap-5 h-fit">
    {categories.map((item, index)=>(
      <Link key={index} to={`/notesingle/${item.name}`}>
        <div className={`rounded-lg text-center content-center h-64 w-full ${item.color}`}>
          {item.name}
        </div>
      </Link>
    ))}
    </div>
  )
}

export default Notes;