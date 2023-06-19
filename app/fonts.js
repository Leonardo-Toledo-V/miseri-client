import { Playfair_Display, Lato } from 'next/font/google';

export const lato = Lato(
    {subsets: ['latin'],
    variable: '--font-lato',
    weight: '300'
});

export const playfair = Playfair_Display({ 
    subsets: ['latin'], 
    variable: '--font-playfair',
    weight: '600'
});