import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={40}
      height={54}
      viewBox="0 0 69 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.84 62.828h43.02m-43.02 0l5.867 23.466h31.288l5.866-23.466m-43.02 0c-3.912-1.304-9.387-5.084 0-9.778h43.02c3.259 1.304 7.822 5.085 0 9.778"
        stroke={props.color}
        strokeWidth={props.strokewidth}
      />
      <Path
        d="M20.923 53.05C16.474 40.97 5.723 35.267.904 33.924c9.787 0 23.648 11.306 27.355 13.655 0-6.442-16.604-23.387-22.906-27.749 11.566 1.61 22.852 17.114 26.189 21.14 1.78-5.637-6.912-30.2-10.62-38.253 11.567 6.442 15.72 32.768 16.091 40.486 2.67-9.665 14.68-26.728 20.61-29.413-8.897 6.443-15.139 26.32-15.139 32.695 4.449-5.637 20.7-12.561 26.261-12.561C57.18 36.34 52.063 47.682 50.951 53.05H20.923z"
        stroke={props.color}  
        strokeWidth={props.strokewidth}      
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default SvgComponent
