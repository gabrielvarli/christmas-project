type ErrorProps = {
  text: string;
};

const ErrorMessage: React.FC<ErrorProps> = ({ text }) => {
  return (
    <aside
      className="flex flex-col items-center text-center mt-20 p-4 bg-red-100 rounded-lg shadow-md"
      role="alert"
      aria-live="polite"
    >
      <h2 className="font-dancing text-5xl text-red-600 mb-4">Oh no!</h2>
      <p className="text-gray-800 mb-2">
        Något gick fel på{" "}
        <span className="font-semibold">Christmas Shopping!</span>
      </p>
      <p className="text-gray-700 italic">{text}</p>
      <img
        src="/images/doftljus.png"
        alt="Error illustration"
        className="mt-4 w-32 h-32 object-contain"
      />
    </aside>
  );
};

export default ErrorMessage;
