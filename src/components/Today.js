import sun from "../images/sun.png"; // 일
import mon from "../images/mon.png"; // 월
import tue from "../images/tue.png"; // 화
import wed from "../images/wed.png"; // 수
import thu from "../images/thu.png"; // 목
import fri from "../images/fri.png"; // 금
import sat from "../images/sat.png"; // 토

import { Image, Text } from "@chakra-ui/react";

const days_list = [sun, mon, tue, wed, thu, fri, sat];
const dname_list = ["일", "월", "화", "수", "목", "금", "토"];

const day_emo = days_list[new Date().getDay()];
const day_name = dname_list[new Date().getDay()];
function Today() {
  return (
    <>
      <Image src={day_emo}></Image>
      <Text fontSize="4xl">{day_name}요일!</Text>
    </>
  );
}

export default Today;
