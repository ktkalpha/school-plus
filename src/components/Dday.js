import { useEffect, useState } from "react";
import axios from "axios";
import "./Dday.css";

function Dday() {
  let [eventList, setEL] = useState([]);

  let [date, foo] = useState(new Date());
  let [dateString, bar] = useState(
    `${date.getFullYear().toString()}${(date.getMonth() + 1)
      .toString()
      .padStart(2, 0)}${date.getDate().toString().padStart(2, 0)}`
  );
  function getDday(ds) {
    const edit_ds = `${ds.slice(0, 4)}-${ds.slice(4, 6)}-${ds.slice(6, 8)}`;
    const dday_date = new Date(edit_ds);
    const today_date = new Date();
    let diff = dday_date - today_date;

    diff = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (diff < 0) {
      return "+" + (diff - diff - diff);
    } else if (diff === 0) {
      return "-DAY";
    } else if (diff > 0) {
      return "-" + diff;
    }
    return;
  }

  useEffect(() => {
    axios
      .get(
        "https://open.neis.go.kr/hub/SchoolSchedule?ATPT_OFCDC_SC_CODE=H10&SD_SCHUL_CODE=7501034&Type=json",
        {
          params: {
            AA_FROM_YMD: Number(dateString),
            KEY: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((result) => {
        if (result.data?.schoolSchedule) {
          setEL(["정보가 없습니다."]);
        } else {
          // console.log(result.data.SchoolSchedule[1].row);
          let event_data = result.data.SchoolSchedule[1].row;

          let rl = [];
          let dday_list = [
            "2/3학년 중간고사",
            "2/3학년 기말고사",
            "체육대회",
            "여름방학식",
            "개학식",
            "수련활동",
            "수학여행",
            "1/2학년 기말고사",
            "3학년 기말고사",
            "중간고사",
            "해오름제",
            "겨울방학",
          ];
          event_data.map((e) => {
            if (dday_list.includes(e.EVENT_NM)) {
              rl.push(`${e.EVENT_NM}까지 D${getDday(e.AA_YMD)}`);
              dday_list = dday_list.filter((t) => t !== e.EVENT_NM);
            }
          });
          // setFL(event_data);
          setEL(rl);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dateString]);
  return (
    <div>
      <h1>D-Day</h1>

      <br></br>
      {eventList.map((event, index) => (
        <div>
          <span className="event-item" key={index.toString()}>
            {event}
          </span>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default Dday;
