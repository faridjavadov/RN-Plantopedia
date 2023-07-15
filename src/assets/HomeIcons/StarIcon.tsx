import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.53.793c.327-1.01 1.757-1.01 2.084 0l2.379 7.378c.146.453.568.76 1.044.759l7.752-.017c1.063-.002 1.505 1.358.644 1.98l-6.282 4.544a1.094 1.094 0 00-.399 1.227l2.412 7.367c.33 1.01-.827 1.851-1.685 1.225l-6.262-4.57a1.094 1.094 0 00-1.29 0l-6.262 4.57c-.858.626-2.015-.215-1.685-1.224l2.412-7.368a1.094 1.094 0 00-.399-1.227L.711 10.894c-.86-.623-.418-1.983.644-1.981l7.752.017c.476 0 .898-.306 1.044-.758l2.38-7.379z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
