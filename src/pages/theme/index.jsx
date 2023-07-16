import { Audio } from "@/components/Theme/Audio";
import { Hero } from "@/components/Theme/Hero";
import { Title } from "@/components/Theme/Title";

import { BackgroundImage, Flex, Text } from "@mantine/core";
import { BridgeGroom } from "./BridgeGroom";
export default function Example() {
  return (
    <>
      <Hero />
      <Audio />
      <Title />
      <Flex>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,80 0,80 C 139.28571428571428,75.32142857142857 278.57142857142856,70.64285714285714 401,73 C 523.4285714285714,75.35714285714286 629,84.75000000000001 754,92 C 879,99.24999999999999 1023.4285714285713,104.35714285714286 1141,102 C 1258.5714285714287,99.64285714285714 1349.2857142857142,89.82142857142857 1440,80 C 1440,80 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#088395"
            fillOpacity="0.265"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <path
            d="M 0,400 C 0,400 0,160 0,160 C 136.82142857142856,154.89285714285714 273.6428571428571,149.78571428571428 399,149 C 524.3571428571429,148.21428571428572 638.25,151.75 748,156 C 857.75,160.25 963.3571428571429,165.21428571428572 1078,166 C 1192.642857142857,166.78571428571428 1316.3214285714284,163.39285714285714 1440,160 C 1440,160 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#088395"
            fillOpacity="0.4"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
          <path
            d="M 0,400 C 0,400 0,240 0,240 C 98.67857142857142,236.85714285714286 197.35714285714283,233.71428571428572 313,240 C 428.64285714285717,246.28571428571428 561.2500000000001,262 690,255 C 818.7499999999999,247.99999999999997 943.6428571428571,218.28571428571428 1068,212 C 1192.357142857143,205.71428571428572 1316.1785714285716,222.85714285714286 1440,240 C 1440,240 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#088395"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-2"
          ></path>
          <path
            d="M 0,400 C 0,400 0,320 0,320 C 104.64285714285714,323.1428571428571 209.28571428571428,326.2857142857143 347,318 C 484.7142857142857,309.7142857142857 655.5000000000001,289.99999999999994 783,295 C 910.4999999999999,300.00000000000006 994.7142857142858,329.7142857142857 1097,338 C 1199.2857142857142,346.2857142857143 1319.642857142857,333.1428571428571 1440,320 C 1440,320 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#088395"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-3"
          ></path>
        </svg>
      </Flex>
      <BridgeGroom />
    </>
  );
}
