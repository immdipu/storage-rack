import * as React from "react";
import { SVGProps } from "react";
const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#ea3e3e"
      fillRule="evenodd"
      d="M3 22h18a1 1 0 0 0 1-1v-4l-4.293-4.293a1 1 0 0 0-1.414 0L10.5 18.5a.707.707 0 0 1-1-1L11 16l-2.293-2.293a1 1 0 0 0-1.414 0L2 19v2a1 1 0 0 0 1 1Zm18 2H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3ZM6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ImageIcon;
