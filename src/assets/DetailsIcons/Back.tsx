import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={12}
      height={24}
      viewBox="0 0 21 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.72 3.124L3.4 18.443l15.32 15.319"
        stroke="#435B71"
        strokeWidth={4.37685}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
