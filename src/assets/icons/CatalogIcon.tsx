import * as React from "react"
const CatalogIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask id="a" fill="#fff">
      <path d="M3.19 11.59a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-8Z" />
    </mask>
    <path
      fill="#7F4DFF"
      d="M5.19 11.59h14v-4h-14v4Zm14 0v8h4v-8h-4Zm0 8h-14v4h14v-4Zm-14 0v-8h-4v8h4Zm0 0h-4a4 4 0 0 0 4 4v-4Zm14 0v4a4 4 0 0 0 4-4h-4Zm0-8h4a4 4 0 0 0-4-4v4Zm-14-4a4 4 0 0 0-4 4h4v-4Z"
      mask="url(#a)"
    />
    <mask id="b" fill="#fff">
      <path d="M5.2 5.59a2 2 0 0 1 2-2h9.98a2 2 0 0 1 2 2H5.2Z" />
    </mask>
    <path
      fill="#7F4DFF"
      d="M5.2 5.59a4 4 0 0 1 4-4h5.98a4 4 0 0 1 4 4H5.2Zm13.98 0H5.2h13.98Zm-13.98 0v-2 2Zm13.98-2v2-2Z"
      mask="url(#b)"
    />
    <mask id="c" fill="#fff">
      <path d="M4.2 8.59a2 2 0 0 1 2-2h11.97a2 2 0 0 1 2 2H4.2Z" />
    </mask>
    <path fill="#7F4DFF" d="M4.2 8.59a2 2 0 0 1 2-2h11.97a2 2 0 0 1 2 2H4.2Z" />
    <path
      fill="#7F4DFF"
      d="M4.2 8.59a4 4 0 0 1 4-4h7.97a4 4 0 0 1 4 4H4.2Zm15.97 0H4.2h15.97Zm-15.97 0v-2 2Zm15.97-2v2-2Z"
      mask="url(#c)"
    />
  </svg>
)
export default CatalogIcon
