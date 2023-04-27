import { Text, HStack, Image, VStack } from "@chakra-ui/react";
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
          boxSize="120px"
          src={randomImage()}
        />
        <VStack>
          <Text fontSize="4xl">홍길동</Text>
          <Text> 1학년 1반 1번</Text>
        </VStack>
      </HStack>
    </>
  );
}

export default User;
