import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={43}
    fill="none"
    viewBox="0 0 73 73"
    {...props}
  >
    <Path
      stroke="#0D986A"
      strokeWidth={4.377}
      d="M28.876 54.286c-17.265-7.802-12.055-38.078-12.055-38.078s30.276-5.21 38.078 12.056c3.901 8.632-5.7 20.322-5.7 20.322s-11.69 9.602-20.323 5.7Z"
    />
    <Path
      stroke="#0D986A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.377}
      d="m28.31 27.697 8.356 8.356M56.51 55.897 41.888 41.275m0 0L44.808 30m-2.92 11.275-5.222-5.222m0 0-10.092 1.736"
    />
  </Svg>
)
export default SvgComponent
