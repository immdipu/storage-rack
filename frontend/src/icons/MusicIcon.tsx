import * as React from "react";
import { SVGProps } from "react";
const MusicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g fill="#f0e34c">
      <path
        fillRule="evenodd"
        d="M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995V3.81Z"
        clipRule="evenodd"
      />
      <ellipse cx={14.75} cy={15} rx={3} ry={2.5} />
      <ellipse cx={5.75} cy={16} rx={3} ry={2.5} />
      <path
        fillRule="evenodd"
        d="M15.75 5h2v10h-2V5ZM6.75 6h2v10h-2V6Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default MusicIcon;
