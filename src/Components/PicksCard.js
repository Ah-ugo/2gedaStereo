import { Box, Button, HStack, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import Img from "../Assets/Image1.jpeg";
import MoreIcon from "../Assets/MoreIcon.svg";
import Play from "../Assets/ph_play-fill.svg";

export default function PicksCard({ title, artist }) {
  const [formatedTitle, setFormatedTitle] = useState();
  useEffect(() => {
    const length = 18;
    const string =
      title?.length > length ? title.substring(0, length - 3) + "..." : title;
    setFormatedTitle(string);
  }, [title]);
  return (
    <div style={{ minWidth: 168, maxWidth: 250 }}>
      <Box position={""}>
        <img src={Img} className="w-full h-[160px] rounded-md" />

        <Button
          alignSelf={"flex-end"}
          alignItems={"center"}
          // opacity={"20%"}
          justifyContent={"center"}
          position={"absolute"}
          left={"140px"}
          top={"10px"}
          width={"20px"}
          height={"22px"}
          borderRadius={"50px"}
          backgroundColor={"rgba(255,255,255, 0.2)"}
          // style={{background:}}
        >
          <img
            src={MoreIcon}
            style={{ width: 10, height: 10, color: "white" }}
          />
        </Button>
      </Box>
      <HStack justifyContent={"space-between"} my={2}>
        <VStack>
          <Text fontSize={"14px"} fontWeight={"400"} color={"black"}>
            {title ? formatedTitle : "Dead"}
          </Text>
          <Text fontSize={"12px"} fontWeight={"400"} color={"#403F3F"}>
            {artist ? artist : "Billie Eilish"}
          </Text>
        </VStack>
        <Button
          width={"30px"}
          height={"30px"}
          borderRadius={30}
          backgroundColor={"rgba(79, 13, 163, 0.25)"}>
          <img src={Play} />
        </Button>
      </HStack>
    </div>
  );
}
