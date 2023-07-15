import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={20}
      height={28}
      viewBox="0 0 39 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.188 24.443V41.95a4.377 4.377 0 004.377 4.377h26.261a4.377 4.377 0 004.377-4.377V24.443M28.45 11.313l-8.754-8.754-8.754 8.753M19.696 2.559v28.45"
        stroke="#435B71"
        strokeWidth={3.28264}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
