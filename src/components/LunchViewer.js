import { useEffect, useState } from "react";
import axios from "axios";
import "./LunchViewer.css";

function LunchViewer() {
  let regex = /\([^)]*\)/i;
  let [foodList, setFL] = useState([]);
  const date = new Date();
  const dateString = `${date.getFullYear().toString()}${(date.getMonth() + 1)
    .toString()
    .padStart(2, 0)}${date.getDate().toString().padStart(2, 0)}`;

  useEffect(() => {
    axios
      .get(
        "https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=H10&SD_SCHUL_CODE=7501034&Type=json&",
        {
          params: {
            MLSV_YMD: Number(dateString),
            KEY: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((result) => {
        if (result.data.RESULT?.MESSAGE) {
          setFL(["정보가 없습니다."]);
        } else {
          let food_data =
            result.data.mealServiceDietInfo[1].row[0].DDISH_NM.split("<br/>");

          setFL(food_data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dateString]);
  return (
    <div>
      <h1>급식</h1>
      <div className="list">
        {foodList.map((food, index) => (
          <>
            <span className="list-item" key={index.toString()}>
              {food.replace(regex, "")}
            </span>
            <br></br>
            <br></br>
          </>
        ))}
      </div>
    </div>
  );
}

export default LunchViewer;
