import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 40 40"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M35.123 5.076v.001c4.273 4.656 4.268 11.935.006 16.559h0L19.726 38.354 4.322 21.636h0C.06 17.012.056 9.733 4.32 5.086l.001-.002a10.636 10.636 0 013.457-2.527 9.847 9.847 0 014.056-.885c2.621 0 5.163 1.068 7.119 3.02l.773.771.773-.771c1.956-1.952 4.498-3.02 7.118-3.02a9.84 9.84 0 014.052.882 10.627 10.627 0 013.454 2.522z"
        stroke="#0D986A"
        strokeWidth={2.18842}
      />
    </Svg>
  )
}

export default SvgComponent
