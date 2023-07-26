import { Audio } from "@/components/Theme/Audio";
import { BridgeGroom } from "@/components/Theme/BridgeGroom";
import { Countdown } from "@/components/Theme/Countdown";
import { Hero } from "@/components/Theme/Hero";
import { LoveStory } from "@/components/Theme/LoveStory";
import { TimePlace } from "@/components/Theme/TimePlace";
import { Title } from "@/components/Theme/Title";
import { Wave } from "@/components/Theme/Wave";
import { BackgroundImage, Flex } from "@mantine/core";
import { dataexample } from "@/assets/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Moment } from "@/components/Theme/Moment";
export default function Theme() {
  const [data, setData] = useState(dataexample);
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    // Mengakses nama dari URL menggunakan useEffect
    const pathname = router.asPath; // Mengambil seluruh path dari URL (termasuk parameter kueri)
    const nameValue = pathname.split("/").pop(); // Mengambil bagian terakhir dari path (dalam hal ini "joko%20santoso")
    const decodedName = decodeURIComponent(nameValue); // Mendekode nama yang terenkripsi menjadi "joko santoso"
    const titleCaseName = toTitleCase(decodedName); // Mengubah "joko santoso" menjadi "Joko Santoso"
    setName(titleCaseName); // Set nama "Joko Santoso" ke dalam state
  }, [router.asPath]);

  // Fungsi untuk mengubah string menjadi title case (huruf kapital pada setiap kata)
  const toTitleCase = (str) => {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
      return match.toUpperCase();
    });
  };
  console.log(data.date_married);
  // Output: budi
  return (
    <>
      {data && (
        <>
          <Hero
            bridenickname={data.bride_nick_name}
            groomnickname={data.groom_nick_name}
            guest={name}
          />
          <Audio />
          <Flex className="w-full h-full" direction={"column"}>
            <Title
              bridenickname={data.bride_nick_name}
              groomnickname={data.groom_nick_name}
              date={data.date_married}
            />
            <Wave />
            <BridgeGroom
              bridefullname={data.bride_full_name}
              bridenickname={data.bride_nick_name}
              brideparents={[data.bride_father_name, data.bride_mother_name]}
              groomfullname={data.groom_full_name}
              groomnickname={data.groom_nick_name}
              groomparents={[data.groom_father_name, data.groom_mother_name]}
              bridesocmed={[data.bride_fb, data.bride_ig, data.bride_twitter]}
              groomsocmed={[data.groom_fb, data.groom_ig, data.groom_twitter]}
            />
          </Flex>

          <BackgroundImage className="md:px-40 bg-paper-texture bg-repeat bg-contain p-4">
            <Countdown
              targetDate={data.date_married}
              suppressHydrationWarning
            />
            <TimePlace
              calendar={[data.matrimony_calendar, data.reception_calendar]}
              address={[data.address_matrimony, data.address_reception]}
              date={[data.date_matrimony, data.date_reception]}
              place={[data.place_matrimony, data.place_reception]}
              time={[data.time_matrimony, data.time_reception]}
              map={[data.matrimony_maps, data.reception_maps]}
            />
          </BackgroundImage>
          <LoveStory />
          <Moment />
        </>
      )}
    </>
  );
}
