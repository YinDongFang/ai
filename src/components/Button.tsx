function Loading() {
  return (
    <div className="w-4 h-4 border-t-transparent border-l-transparent border-r-transparent border-b-transparent border-2 rounded-full animate-spin" />
  );
}

export function Button(props: {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  onClick?: () => void;
}) {
  const { children, className, loading, ...rest } = props;

  return (
    <button
      className={`bg-blue-500 text-white px-4 py-1.5 rounded-md flex items-center gap-2 ${className}`}
      {...rest}
    >
      {!!loading && <Loading />}
      {children}
    </button>
  );
}
