import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';

export async function GET(url) {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data);
        const img = $('.model-image-swiper__image:first').attr("src")

        return NextResponse.json({ img });
    } catch (error) {
        console.error('Error scraping the page:', error);
        return new NextResponse('Failed to scrape the page', { status: 500 });
    }
}
