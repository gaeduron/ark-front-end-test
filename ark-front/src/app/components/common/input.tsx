interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({value, type="text", onChange, placeholder, className}: InputProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
        bg-dark
        text-primary
        placeholder:text-primary
        rounded-md p-3 pl-12
        focus:outline-none
        w-full
        `}
      />
      <svg className="absolute top-3 left-3" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7191 12.2023C17.0866 10.0053 16.4289 7.67772 14.7429 5.99168C11.9598 3.20863 7.4288 3.22743 4.62255 6.03367C1.81631 8.83991 1.79751 13.3709 4.58056 16.154C7.36361 18.937 11.8946 18.9182 14.7009 16.112L21.9461 22.7845" stroke="#73B9EB" stroke-width="1.5625" stroke-linecap="round"/>
      </svg>
    </div>
  )
}