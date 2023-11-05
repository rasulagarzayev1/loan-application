import { describe, it, expect } from 'vitest'
import { getLoanAmountOptions, getLoanPeriods } from './loanDataHelpers';

describe('getLoanAmountOptions', () => {
	it('returns an array of loan amount options', () => {
		const options = getLoanAmountOptions();
		expect(Array.isArray(options)).toBe(true);
		expect(options).toHaveLength(27);
		options.forEach((option) => {
			expect(option).toHaveProperty('value');
			expect(option).toHaveProperty('name');
			expect(typeof option.value).toBe('number');
			expect(typeof option.name).toBe('string');
		});
  });
});

describe('getLoanPeriods', () => {
	it('returns an array of loan period options', () => {
		const options = getLoanPeriods();
		expect(Array.isArray(options)).toBe(true);
		expect(options).toHaveLength(16);
		options.forEach((option) => {
			expect(option).toHaveProperty('value');
			expect(option).toHaveProperty('name');
			expect(typeof option.value).toBe('number');
			expect(typeof option.name).toBe('string');
		});
	});
});
