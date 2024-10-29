import * as React from "react"
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    className="ui-icon magnifying-glass"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15.5 10.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-1.16 5.245a6.5 6.5 0 1 1 1.405-1.405l3.964 3.964a.994.994 0 0 1-1.405 1.405l-3.964-3.964Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SearchIcon
