import type { Vysledky } from '../types/types';

export const validateResultsFromString = (unvalidatedData: string) => {
    const pattern: any = /(.*)\t(.*)\t.*\t(.*)\t.*\t.*\t.*\t.*\t.*\t.*/gm;
    const validatedData = unvalidatedData.matchAll(pattern);
    const arr: Vysledky[] = [];
    for (const match of validatedData) {
        arr.push({
            predmet: match[1],
            znamka: parseInt(match[2]),
            vaha: parseInt(match[3]),
        });
    }
    return arr;
};
