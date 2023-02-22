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

export const useThemeStore = create((set) => ({
    dark_mode: false,
    set_dark_mode: (dark_mode) => set(() => ({dark_mode})),
}))

export const useSelectedCitiesStore = create((set) => ({
    selected_cities: [],
    add_selected_city: (city) => set((state) => ({selected_cities: [...state.selected_cities, city]})),
    remove_selected_city: (city) => set((state) => ({selected_cities: state.selected_cities.filter((c) => c !== city)})),
}))