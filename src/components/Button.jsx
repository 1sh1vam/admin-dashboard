import { initialState, useStateContext } from '../contexts/ContextProvider';

function Button({ icon, bgColor, color, bgHoverColor, text, size, borderRadius, width }) {
  const { setClicked } = useStateContext();
  return (
    <button
      onClick={() => setClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
