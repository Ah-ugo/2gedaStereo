import { Box, Button, Center, Image, Text } from "native-base";
import React from "react";
import CardImg from "../Assets/Image2.jpeg";

export default function HitsCard({ img, name, artist }) {
  return (
    <div
      style={{ minWidth: 168, minHeight: 192, maxWidth: 168, maxHeight: 192 }}>
      <Box width={"100%"}>
        <img
          src={img ? img : CardImg}
          width={"100%"}
          style={{ minHeight: 150, maxHeight: 150 }}
          className="rounded-md"
        />
      </Box>
      <Center>
        <Text fontSize={"16px"} fontWeight={"400"} color={"black"}>
          {name ? name : "Are we annoyed?"}
        </Text>
        <Text fontSize={"12px"} fontWeight={"400"} color={"#403F3F"}>
          {artist ? artist : "Billie Eilish"}
        </Text>
      </Center>
    </div>
  );
}
