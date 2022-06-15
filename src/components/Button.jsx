function Button({ icon, bgColor, color, bgHoverColor, text, size, borderRadius, width }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
