export const isValidEmail = (email: string) : boolean => {
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
	return emailRegex.test(email);
}

export const isValidPhoneNumber = (phoneNumber: string) : boolean => {
	const phoneNumberRegex = /^(?:\+372|00372|8)[1-9]\d{7}$/;
	return phoneNumberRegex.test(phoneNumber);
}