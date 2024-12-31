import { HTMLInputTypeAttribute } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  type?: HTMLInputTypeAttribute;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
};

function FormInput<T extends FieldValues>({
  type = "text",
  placeholder,
  name,
  register,
  error,
}: InputProps<T>) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`border ${error?.message ? "border-red-500" : "border-black border-opacity-20"} w-full placeholder:text-black px-5 py-2 bg-transparent`}
        {...register(name)}
      />
      {error?.message && <p className="mt-1 text-red-500">{error.message}</p>}
    </>
  );
}

export default FormInput;
