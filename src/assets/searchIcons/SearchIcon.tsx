import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{position:'absolute',top:12,left:20}}
    >
      <Path
        d="M38.61 31.818l-6.649-6.649-5.114-2.112a14.352 14.352 0 002.612-8.271C29.46 6.828 22.985.354 15.027.354S.595 6.828.595 14.786s6.474 14.432 14.432 14.432a14.353 14.353 0 008.333-2.655l2.107 5.1 6.649 6.65a4.593 4.593 0 006.494-6.495zM3.22 14.786c0-6.511 5.297-11.808 11.808-11.808 6.51 0 11.808 5.297 11.808 11.808 0 6.51-5.297 11.808-11.808 11.808-6.51 0-11.808-5.297-11.808-11.808zm33.536 21.671a1.97 1.97 0 01-2.784 0l-6.278-6.279-1.96-4.742 4.743 1.959 6.279 6.279a1.97 1.97 0 010 2.783z"
        fill="#435B71"
      />
    </Svg>
  )
}

export default SvgComponent
