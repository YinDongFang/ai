export function Button(props: { children: React.ReactNode; className?: string }) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`bg-blue-500 text-white px-4 py-1.5 rounded-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
