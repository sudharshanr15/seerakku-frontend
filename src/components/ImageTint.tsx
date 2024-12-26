const ImageTint = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-gradient-to-b absolute top-0 left-0 w-full h-full from-transparent to-black ${className}`}
    >
      {children}
    </div>
  );
};

export default ImageTint;
