import Date from "./Date";
import calenderData from "../calendarData.json";

function Calender () {
    return (
    <div className="bg-white max-w-4xl rounded-lg shadow-2xl p-8"> 
    <div className="pb-8 text-4xl font-bold">2023, 04</div>
    <ul className="grid grid-cols-7 gap-4">
        {calenderData.map((v, i) => {
          return <Date key={i} date={v.date} day={v.day} todos={v.todos} />;
        })}
      </ul>
    </div>
    );
}
export default Calender;