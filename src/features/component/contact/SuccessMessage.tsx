export default function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-success"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p className="text-base-content font-bold">Message sent!</p>
      <p className="text-base-content/50 text-sm">I'll get back to you soon.</p>
    </div>
  );
}
