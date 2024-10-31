import * as React from "react"
const LeftArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#1f2026"
    // viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M15.81 20.498a.75.75 0 0 0-.062-1.059L7.878 12l7.87-7.44a.75.75 0 0 0-.996-1.12l-8.5 8a.75.75 0 0 0 0 1.12l8.5 8a.75.75 0 0 0 1.059-.062Z"
   
    />
  </svg>
)
export default LeftArrowIcon
