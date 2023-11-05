import { TLoanAmount, TLoanPeriod} from "@/types/loanModels";
export const getLoanAmountOptions = () :TLoanAmount[] => {
	const options: TLoanAmount[] = [];

	for (let i = 300; i <= 1000; i += 100) {
		options.push({
			value: i,
			name: String(i) + '€',
		});
	}

	for (let i = 1000; i <= 10000; i += 500) {
		options.push({
			value: i,
			name: String(i) + '€',
		});
	}

	return options;
}

export const getLoanPeriods = (): TLoanPeriod[] => {
	const months = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48];
	const options = months.map((month) => {
		return {
			value: month,
			name: `${month} months`,
		};
	});
	return options;
}