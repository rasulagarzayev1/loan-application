import { TCountry, TCity, TState } from '@/types/locationModels';
import csc, { ICity, IState } from 'country-state-city';

export const getAllCountries = (): TCountry[] => {
	const countries = csc.getAllCountries();
	return countries.map((country) =>{ return {
		name: country.name,
		countryCode: country.isoCode
	};});
};

export const getStates = (countryCode: string): TState[] => {
	const states  = csc.getStatesOfCountry(countryCode);
	return states.map((state: IState) => { return {
		name: state.name,
		stateCode: state.isoCode
	};});
};

export const getCities = (countryCode: string, stateCode: string): TCity[] => {
	const cities  = csc.getCitiesOfState(countryCode, stateCode);
	return cities.map((city: ICity) => { return {
		name: city.name
	};});
};
