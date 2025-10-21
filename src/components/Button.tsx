import type { ReactNode } from 'react';

const Button = ({
	children,
	className,
	handleClick,
}: {
	children: ReactNode;
	className?: string;
	handleClick: (c: string) => void;
}) => {
	return (
		<button
			className={` w-24 h-24 rounded-xl flex items-center justify-center  active:-translate-y-5 duration-200 cursor-pointer  ${
				className
					? className
					: 'bg-neutral-700 hover:bg-neutral-500 active:bg-neutral-600  '
			}`}
			onClick={() => handleClick(String(children))}
		>
			<span className="text-3xl font-extralight">{children}</span>
		</button>
	);
};

export default Button;
