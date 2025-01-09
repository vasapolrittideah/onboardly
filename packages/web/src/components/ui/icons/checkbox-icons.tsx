export function IconCheck({ ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M1 3.5L4 6.5L9 1.5"
        strokeWidth="1.5"
        className="stroke-static-white"
      />
    </svg>
  );
}

export function IconIndeterminate({ ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="8"
      height="2"
      viewBox="0 0 8 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path d="M0 1H8" strokeWidth="1.5" className="stroke-static-white" />
    </svg>
  );
}
