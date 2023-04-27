import {
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Image,
} from "@chakra-ui/react";
import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";

const fileNames = [profile1, profile2, profile3];

function randomImage() {
  return fileNames[Math.floor(Math.random() * fileNames.length)];
}

function User() {
  return (
    <>
      <HStack>
        <Image
          boxShadow="dark-lg"
          borderRadius="20%"
          boxSize="50px"
          src={randomImage()}
        />
        <Editable
          defaultValue={
            localStorage.getItem("name")
              ? JSON.parse(localStorage.getItem("name"))
              : "김철수"
          }
        >
          <EditablePreview />
          <EditableInput
            onChange={(e) => {
              localStorage.setItem("name", JSON.stringify(e.target.value));
            }}
          />
        </Editable>
        <Editable
          defaultValue={
            localStorage.getItem("school-number")
              ? JSON.parse(localStorage.getItem("school-number"))
              : "1학년 1반 1번"
          }
        >
          <EditablePreview />
          <EditableInput
            onChange={(e) => {
              localStorage.setItem(
                "school-number",
                JSON.stringify(e.target.value)
              );
            }}
          />
        </Editable>
      </HStack>
    </>
  );
}

export default User;
