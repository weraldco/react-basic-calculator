import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
	const [result, setResult] = useState<string | '0'>('0');
	const [operation, setOperation] = useState('');
	const [history, setHistory] = useState('0');

	const handleNumberClick = (c: string) => {
		setResult(result == '0' ? c : result + c);
	};
	const handleClearResult = () => {
		setResult('0');
	};
	const handleAddPoint = (c: string) => {
		setResult(result == '0' ? '0' + c : result + c);
	};
	const handleAddPositiveNegative = () => {
		const sign = result[0] == '-' ? '+' : '-';
		console.log(result[0]);
		setResult(
			result[0] && result[0] !== '-' && result[0] !== '+'
				? sign + result
				: result[0] == '-'
				? result.replace('-', '+')
				: result.replace('+', '-')
		);
		console.log(result[0]);
	};
	const handleAdd = () => {
		setOperation('+');
		if (operation != '') {
			setResult(String(eval(result)) + '+');
		} else {
			setResult(result + '+');
		}
	};
	const handleMinus = () => {
		setOperation('-');
		if (operation != '') {
			setResult(String(eval(result)) + '-');
		} else {
			setResult(result + '-');
		}
	};
	const handleDivide = () => {
		setOperation('/');
		if (operation != '') {
			setResult(String(eval(result)) + '/');
		} else {
			setResult(result + '/');
		}
	};
	const handleMultiply = () => {
		setOperation('*');
		if (operation != '') {
			setResult(String(eval(result)) + '*');
		} else {
			setResult(result + '*');
		}
	};
	const handleEquals = () => {
		if (result == '') {
			setResult('0');
		} else {
			setHistory(result);
			setResult(String(eval(result)));
		}
	};

	console.log('text', eval('-7 - 10'));
	console.log(result);
	console.log(operation);
	return (
		<>
			<main className="text-white w-full  h-screen flex items-center justify-center">
				<section className="flex flex-col gap-4 bg-neutral-800  p-6 rounded-3xl">
					{/* Results */}
					<div className="bg-neutral-100 rounded-xl px-5 pt-5">
						{/* History */}
						<div className="font-extralight text-right text-neutral-500">
							{history}
						</div>
						{/* Total */}
						<div className="text-[400%] text-right text-neutral-700 font-medium">
							{result}
						</div>
					</div>
					{/* Buttons */}
					<div className="grid grid-cols-4 grid-rows-5 gap-3">
						<Button handleClick={handleClearResult} className="bg-neutral-500">
							C
						</Button>
						<Button
							handleClick={handleAddPositiveNegative}
							className="bg-neutral-500"
						>
							-/+
						</Button>
						<Button
							handleClick={() => console.log('%')}
							className="bg-neutral-500"
						>
							%
						</Button>
						<Button
							handleClick={handleDivide}
							className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700"
						>
							/
						</Button>
						<Button handleClick={handleNumberClick}>1</Button>
						<Button handleClick={handleNumberClick}>2</Button>
						<Button handleClick={handleNumberClick}>3</Button>
						<Button
							handleClick={handleMultiply}
							className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700"
						>
							x
						</Button>
						<Button handleClick={handleNumberClick}>4</Button>
						<Button handleClick={handleNumberClick}>5</Button>
						<Button handleClick={handleNumberClick}>6</Button>
						<Button
							handleClick={handleMinus}
							className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700"
						>
							-
						</Button>
						<Button handleClick={handleNumberClick}>7</Button>
						<Button handleClick={handleNumberClick}>8</Button>
						<Button handleClick={handleNumberClick}>9</Button>
						<Button
							handleClick={handleAdd}
							className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700"
						>
							+
						</Button>
						<Button handleClick={handleAddPoint}>.</Button>
						<Button className=" bg-neutral-700" handleClick={handleNumberClick}>
							0
						</Button>
						<Button
							handleClick={handleEquals}
							className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700  col-span-2 w-full"
						>
							=
						</Button>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
