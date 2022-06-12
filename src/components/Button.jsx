function Button({ bgColor, color, text, size, borderRadius, width }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
}

export default Button;
