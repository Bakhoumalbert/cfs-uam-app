import clsx from "clsx";

interface Props {
    children: React.ReactNode,
    className?: string;
    padding_x?: string;
    padding_y?: string;
}

export const Box = ({ children, className, padding_x = "px-9", padding_y = "py-9" }: Props) => {
  return (
    <div className={clsx("w-full rounded border border-gray-400 bg-white", padding_x, padding_y, className)}>
        {children}
    </div>
  )
}
