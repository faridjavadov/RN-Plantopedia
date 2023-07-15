import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.265 26.31V23.1h9.63v3.21h-9.63zm-3.097-15.224l4.541-4.539 2.27 2.27-4.542 4.541-2.27-2.272zM24.822 35.938c-6.205 0-11.234-5.03-11.234-11.234 0-6.207 5.03-11.233 11.234-11.233s11.233 5.026 11.233 11.233c0 6.205-5.03 11.234-11.233 11.234zm0-19.277a8.041 8.041 0 00-8.04 8.043 8.04 8.04 0 1016.08 0 8.043 8.043 0 00-8.04-8.043zM23.216.63h3.21v9.63h-3.21V.63zM6.664 40.59l4.542-4.538 2.27 2.272-4.54 4.539-2.272-2.273zm0-31.773l2.273-2.269 4.538 4.539-2.269 2.272-4.542-4.542zm3.714 17.493H.748V23.1h9.63v3.21zm16.048 22.468h-3.21v-9.629h3.21v9.63zM42.98 40.59l-2.27 2.273-4.541-4.539 2.269-2.272 4.542 4.538z"
        fill="#435B71"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.862 25.716l.012-.064 5.377 5.125a8.089 8.089 0 00-5.389-14.12v9.06z"
        fill="#435B71"
      />
    </Svg>
  )
}

export default SvgComponent
