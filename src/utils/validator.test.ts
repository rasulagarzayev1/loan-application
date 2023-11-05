import { describe, it, expect } from 'vitest'
import { isValidEmail, isValidPhoneNumber } from "./validator";

describe('isValidEmail', () => {
	it('valid email', () => {
		expect(isValidEmail('test@example.com')).toBe(true);
	});

	it('invalid email', () => {
		expect(isValidEmail('invalid-email')).toBe(false);
	});
});

describe('isValidPhoneNumber', () => {
	it('valid phone number', () => {
		expect(isValidPhoneNumber('+37212345678')).toBe(true);
	});

	it('invalid phone number', () => {
		expect(isValidPhoneNumber('12345678')).toBe(false);
	});

	it('phone number with incorrect country code', () => {
		expect(isValidPhoneNumber('+99912345678')).toBe(false);
	});
});
