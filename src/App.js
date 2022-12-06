import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

import Modal from "./components/Modal";

function App() {
  const { schedules } = useSelector(state => state.date);
  const [date, setDate] = useState(new Date());
  const [enteredContent, setContent] = useState("");
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();

  const inputSchedule = e => {
    e.preventDefault();
    // console.log(e.target.value);
    setContent("");
  };
  const addSchedule = e => {
    if (window.confirm("입력하시겠습니까?")) {
      setDisplay(true);
    }
  };

  // useEffect(() => {}, [date]);
  console.log(schedules);

  return (
    <div>
      <Calendar calendarType={"US"} onChange={addSchedule} value={date} />
      <Modal
        modal={display}
        inputSchedule={inputSchedule}
        setDisplay={setDisplay}
        setContent={setContent}
        enteredContent={enteredContent}
      />
    </div>
  );
}

export default App;
