import { Button, HStack, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import Image from "../Assets/Image7.jpeg";
import Kebab from "../Assets/optBlack.svg";

export default function MoreCard({ title, img, artist }) {
  const [formatedTitle, setFormatedTitle] = useState();
  useEffect(() => {
    const length = 29;
    const string =
      title?.length > length ? title.substring(0, length - 3) + "..." : title;
    setFormatedTitle(string);
  }, [title]);
  return (
    <div>
      <HStack justifyContent={"space-between"}>
        <HStack space={2}>
          <img
            src={Image}
            style={{ minHeight: 75 }}
            width={75}
            className="rounded-md"
          />
          <VStack space={1} justifyContent={"space-between"}>
            <Text
              fontSize={"16px"}
              fontWeight={"400"}
              color={"black"}
              lineHeight={"18.38px"}
              width={"151px"}>
              {title ? formatedTitle : "Take me home ft Bella Keys..."}
            </Text>
            <Text fontSize={"12px"} fontWeight={"400"} color={"black"}>
              {artist ? artist : "TPrince"}
            </Text>
          </VStack>
        </HStack>

        <Button width={"24px"} height={"24px"} backgroundColor={"none"}>
          <img src={Kebab} width={24} height={24} />
        </Button>
      </HStack>
    </div>
  );
}
