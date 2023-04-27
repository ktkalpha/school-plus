import { useEffect, useState } from "react";
import axios from "axios";
import { Text, SimpleGrid, Box, Center, VStack } from "@chakra-ui/react";

function Dday() {
  let [foodList, setFL] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://open.neis.go.kr/hub/SchoolSchedule?ATPT_OFCDC_SC_CODE=H10&SD_SCHUL_CODE=7501034&Type=json",
        {
          params: {
            AA_FROM_YMD: `${new Date().getFullYear()}0301`,
            KEY: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((result) => {
        if (result.data?.schoolSchedule) {
          setFL(["정보가 없습니다."]);
        } else {
          // console.log(result.data.SchoolSchedule[1].row);
          let event_data = result.data.SchoolSchedule[1].row;

          let rl = [];
          event_data.map((e) => {
            if (e.EVENT_NM !== "토요휴업일") {
              rl.push(e);
            }
          });
          console.log(rl);
          // setFL(event_data);
          setFL(rl);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Center>
      <VStack>
        <Text fontSize="xl">시간표</Text>
        <SimpleGrid columns={7}>
          {foodList.map((event, index) => (
            <Box
              borderRadius="lg"
              borderWidth="1px"
              p="1"
              key={index.toString()}
            >
              {event.AA_YMD}
              <br></br>
              {event.EVENT_NM}
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
}

export default Dday;
