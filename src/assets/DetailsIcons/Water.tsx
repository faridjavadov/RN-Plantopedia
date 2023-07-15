import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={12}
      height={24}
      viewBox="0 0 33 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.478 43.85c5.306-7.697 4.682-10.74 6.087-15.037-7.023-2.148-11.236 4.834-14.045 6.982-2.809 2.148-10.117 5.323-13.862-2.732-.936 6.981 2.782 9.714 7.308 12.936l6.554.926 7.958-3.074z"
        fill="#435B71"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.289 48.777C7.339 48.777.086 40.153.086 29.52.086 18.885 16.29.632 16.29.632s16.203 18.25 16.203 28.887-7.256 19.258-16.203 19.258zm0-43.33S3.327 20.656 3.327 29.518c0 8.865 5.804 16.049 12.962 16.049 7.158 0 12.962-7.187 12.962-16.049 0-8.865-12.962-24.073-12.962-24.073z"
        fill="#435B71"
      />
    </Svg>
  )
}

export default SvgComponent
