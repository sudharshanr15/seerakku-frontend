const ImageTint = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-b absolute top-0 left-0 w-full h-full from-transparent to-black">
      {children}
    </div>
  );
};

export default ImageTint;
