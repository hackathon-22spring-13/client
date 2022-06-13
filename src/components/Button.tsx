interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className='rounded-lg bg-purple-400 text-white mr-2 p-2' onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
