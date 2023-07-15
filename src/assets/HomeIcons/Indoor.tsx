import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={40}
      height={54}
      viewBox="0 0 57 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.282 33.614c1.304 3.911 5.476 11.733 11.733 11.733 7.822 0 15.644-1.955 19.555-11.733"
        stroke={props.color}
        strokeWidth={props.strokewidth}
      />
      <Path
        d="M35.83 31.659c.182-9.301-3.744-20.661-6.904-27.377-6.037 12.073-7.976 20.983-7.758 27.377m14.662 0c-.12 6.046-1.974 11.223-6.904 13.688-3.352-1.117-7.469-5.17-7.758-13.688m14.662 0c2.913 0 10.304-2.347 16.562-11.733.306 7.17-.83 22.293-7.822 25.421l-3.911 1.956H17.193l-5.867-1.956C3.453 39.09 4.135 25.792 5.46 19.926c6.257 9.386 13.079 11.733 15.708 11.733"
        stroke={props.color}
        strokeWidth={props.strokewidth}
      />
      <Path
        d="M7.415 57.08h43.021m-43.02 0l5.866 23.466H44.57l5.866-23.466m-43.02 0c-3.912-1.304-9.387-5.084 0-9.777h43.02c3.26 1.303 7.822 5.084 0 9.777M28.925 25.792v19.555"
        stroke={props.color}
        strokeWidth={props.strokewidth}
      />
    </Svg>
  )
}

export default SvgComponent
