import { CarProps, FilterProps } from "@/types";
import axios from "axios";
import * as cheerio from 'cheerio';
import { NextResponse } from "next/server";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, model, year, fuel, limit } = filters;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e53c5298f9msh3e7a3ee41f41cd1p10dfe7jsne4f34fd672bf',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export async function generateCarImageUrl(make: string, model: string) {
    let mModel = model.split(" ");
    let url = `https://www.cartrade.com/${make}-cars/${mModel.length > 0 ? mModel[0] : model}/`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const img = $('.model-image-swiper__image:first').attr("src")
    return NextResponse.json({  img });;
}

export function updateSearchParam(type: string, value: string) {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value);

    return `${window.location.pathname}?${searchParams.toString()}`
}