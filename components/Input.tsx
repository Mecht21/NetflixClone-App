/**
 * Input Component
 *
 * This component represents a reusable input field with a label for forms.
 *
 * @component
 * @example
 * import Input from "@/components/Input";
 *
 * // Example usage in TSX
 * <Input
 *   id="username"
 *   onChange={(event) => handleUsernameChange(event)}
 *   value={username}
 *   label="Username"
 *   type="text"
 * />
 */
import React from 'react';

/**
 * InputProps Interface
 *
 * Defines the prop types for the Input component.
 *
 * @interface InputProps
 */

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

/**
 * Input Component
 *
 * @function Input
 * @param {InputProps} props - The properties passed to the Input component.
 * @returns {JSX.Element} - The rendered Input component.
 */

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
      text-white
      bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
        placeholder=" " 
      />
      <label 
        htmlFor={id} 
        className="
        absolute 
        text-md
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      ">{label}</label>
    </div>
  )
}

// Export the Input component as the default export
export default Input;