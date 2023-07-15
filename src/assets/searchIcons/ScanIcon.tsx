import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 43 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{position:'absolute',bottom:12,left:330}}

    >
      <Path
        d="M30.724 21.143h-18.9"
        stroke="#435B71"
        strokeWidth={3.28264}
        strokeLinecap="round"
      />
      <Path
        d="M36.867 41.715H26.69v-2.161h10.176a2.819 2.819 0 002.817-2.82V26.56h2.161v10.173a4.98 4.98 0 01-4.978 4.98zm2.817-36.16a2.82 2.82 0 00-2.817-2.822H26.69V.573h10.176a4.981 4.981 0 014.978 4.983v10.173h-2.16V5.556zM.703 36.735V26.56h2.161v10.173c0 1.557 1.26 2.82 2.818 2.82h10.176v2.16H5.682a4.98 4.98 0 01-4.979-4.98zM2.864 5.556v10.173H.703V5.556A4.981 4.981 0 015.682.572h10.176v2.161H5.682a2.818 2.818 0 00-2.818 2.823z"
        fill="#435B71"
        stroke="#435B71"
        strokeWidth={0.437685}
      />
    </Svg>
  )
}

export default SvgComponent
