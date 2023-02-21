import {create} from "zustand";

export const useCitiesStore = create((set) => ({
    cities: [],
    set_cities: (city) => set(() => ({cities: [...city]})),
}))
export const useCityStore = create((set) => ({
        city: '',
        set_city: (city) => set(() => ({city: city})),
    }
))
export const useCountryStore = create((set) => ({
        country: '',
        set_country: (country) => set({country}),
    }
))