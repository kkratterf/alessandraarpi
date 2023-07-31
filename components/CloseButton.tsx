// Import core
// Import third parts
// Import customs

const CloseButton = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-cream-dark3 hover:stroke-cream-dark1 transition duration-300"
    >
      <path
        d="M18 5L6 17"
        stroke-width="1.2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <path
        d="M6 5L18 17"
        stroke-width="1.2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CloseButton;
