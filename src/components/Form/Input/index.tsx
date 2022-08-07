import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

interface IInputProps {
  name: string;
  icon?: JSX.Element;
  placeholder: string;
  type: string;
}

export function Input({ name, icon, placeholder, type }: IInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    toast.error(errors[name]?.message as undefined, {
      position: 'top-center',
      draggable: true,
      theme: 'light',
    });
  }, [errors, name]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex items-center p-2 rounded text-gray-100 gap-2">
          {icon && icon}
          <input
            {...field}
            placeholder={placeholder}
            type={type}
            className='rounded p-1 text-gray-800 outline-none appearance-["textfield"] flex-1'
          />
        </div>
      )}
    />
  );
}
