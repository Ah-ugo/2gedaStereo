import { Box, Center, Text } from "native-base";
import React from "react";
import CardImage from "../Assets/Image5.jpeg";

export default function SpecialPicksCard({ category, img }) {
  return (
    <div
      style={{
        minWidth: 111.89,
        minHeight: 115.23,
        maxWidth: 111.89,
        maxHeight: 115.23,
      }}>
      <Box width={"100%"}>
        <img
          src={img ? img : CardImage}
          width={"100%"}
          style={{ minHeight: 99.9, maxHeight: 99.9 }}
          className="rounded-md"
        />
      </Box>
      <Center>
        <Text fontSize={"10.66px"} fontWeight={"400"} color={"black"}>
          {category ? category : "90’s hit"}
        </Text>
        {/* <Text fontSize={"12px"} fontWeight={"400"} color={"#403F3F"}>
          {artist ? artist : "Billie Eilish"}
        </Text> */}
      </Center>
    </div>
  );
}
