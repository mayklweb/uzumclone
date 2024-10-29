import * as React from "react"
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12 3a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V7a4 4 0 0 0-4-4ZM9.5 7a2.5 2.5 0 0 1 5 0v1a2.5 2.5 0 0 1-5 0V7ZM5.502 19.369c.471-3.111 3.516-4.869 6.5-4.869s6.029 1.758 6.5 4.869a.074.074 0 0 1-.002.036.103.103 0 0 1-.024.037.22.22 0 0 1-.159.062H5.687a.22.22 0 0 1-.159-.062.102.102 0 0 1-.024-.037.074.074 0 0 1-.002-.036Zm6.5-6.369c-3.429 0-7.362 2.04-7.983 6.144-.163 1.077.738 1.86 1.668 1.86h12.63c.93 0 1.831-.783 1.668-1.86C19.364 15.04 15.431 13 12.002 13Z"
      clipRule="evenodd"
    />
  </svg>
)
export default UserIcon
