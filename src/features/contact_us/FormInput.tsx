function FormInput({
  type = "text",
  placeholder,
}: {
  type?: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-black border-opacity-20 w-full placeholder:text-black px-5 py-2 bg-transparent"
    />
  );
}

export default FormInput;
