interface CountdownProps {
  content: number;
  text: string;
}

const CountDownDetail: React.FC<CountdownProps> = ({ content, text }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-300 shadow-md w-24 h-24 rounded-full bg-white">
      <span className="text-xl font-bold text-gray-800">{content}</span>
      <span className="text-sm font-medium text-gray-500">{text}</span>
    </div>
  );
};

export default CountDownDetail;
