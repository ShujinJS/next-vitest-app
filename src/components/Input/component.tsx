interface IInputProps {
  id: string;
  label: string;
  placeholder: string;
}

export default function Input(props: IInputProps) {
  const { id, label, placeholder } = props;

  return (
    <div className="relative flex flex-1 flex-col flex-shrink-0 w-full">
      <label htmlFor="input" className="fs-14 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
    </div>
  );
}
