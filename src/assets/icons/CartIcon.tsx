import * as React from "react"
const CartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9 6.5c0-1.612 1.24-3 3-3s3 1.388 3 3v1H9v-1ZM7.5 9v2.5H9V9h6v2.5h1.5V9h2v10.75a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V9h2Zm0-1.5v-1C7.5 4.112 9.36 2 12 2c2.64 0 4.5 2.112 4.5 4.5v1H20v12.25A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75V7.5h3.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CartIcon
