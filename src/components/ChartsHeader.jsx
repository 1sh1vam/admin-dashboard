function ChartsHeader({ category, title }) {
  return (
    <div className="mb-10">
      <div>
        <p className="text-gray-400 text-lg">Chart</p>
        <p className="text-3xl font-extrabold tracking-tighter dark:text-gray-200 text-slate-900">{category}</p>
      </div>
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>
    </div>
  );
}

export default ChartsHeader;
