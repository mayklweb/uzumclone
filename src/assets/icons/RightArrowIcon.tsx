import * as React from "react"
const RightArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#1f2026"
    className="ui-icon"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M8.19 20.498a.75.75 0 0 1 .062-1.059L16.122 12l-7.87-7.44a.75.75 0 0 1 .996-1.12l8.5 8a.75.75 0 0 1 0 1.12l-8.5 8a.75.75 0 0 1-1.059-.062Z"
      clipRule="evenodd"
    />
  </svg>
)
export default RightArrowIcon
