import sun from "../images/sun.png"; // 일
import mon from "../images/mon.png"; // 월
import tue from "../images/tue.png"; // 화
import wed from "../images/wed.png"; // 수
import thu from "../images/thu.png"; // 목
import fri from "../images/fri.png"; // 금
import sat from "../images/sat.png"; // 토

import "./Today.css";

const days_list = [sun, mon, tue, wed, thu, fri, sat];
const dname_list = ["일", "월", "화", "수", "목", "금", "토"];
const dqutoes_list = [
  "일요일, 새로운 목표를 세우는 좋은 날이에요.",
  "화이팅하세요! 새로운 시작, 새로운 기회가 기다리고 있어요.",
  "멈추지 말고 꾸준히 노력하세요. 당신은 대단한 일을 해낼 수 있어요.",
  "이제 절반을 지났어요! 집중력을 유지하면서 끝까지 힘내봅시다.",
  "이제 거의 다 왔어요! 끝까지 가면 당신이 원하는 대로 될 거예요.",
  "오늘은 금요일! 이번 주도 수고하셨어요.",
  "주말을 즐기면서 당신이 좋아하는 일을 하세요.",
];

const day_emo = days_list[new Date().getDay()];
const day_name = dname_list[new Date().getDay()];
const day_quote = dqutoes_list[new Date().getDay()];
function Today() {
  return (
    <div className="today">
      <img className="today-emoji" alt="today emoji" src={day_emo}></img>
      <h1 className="title">{day_name}요일!</h1>
      <h3 className="subtitle">{day_quote}</h3>
    </div>
  );
}

export default Today;
