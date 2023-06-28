function Avatar({ children }) {
  return (
    <div className="rounded-full w-[60px] h-[60px] flex justify-center items-center bg-slate-600 font-bold text-xl text-white">
      {children}
    </div>
  );
}

export default Avatar;
