import { calculationConfig } from '../configs/calculationConfig';
import type { CalcKey, CalcValue, Vysledky } from '../types/types';

export const calculateAmountOfMoney = (vysledky: Vysledky[]) => {
    let money = 0;
    vysledky.forEach(({ znamka, vaha }: Vysledky) => {
        const config = calculationConfig[znamka - 1];

        for (let key in config) {
            key = key as CalcKey;
            if (key.startsWith('n')) {
                const vahy: CalcValue = (config as any)[key];
                key = key.slice(1);
                if (vahy.includes(vaha)) {
                    money -= parseInt(key);
                }
            } else if (!isNaN(parseInt(key))) {
                const vahy: CalcValue = (config as any)[key];
                if (vahy.includes(vaha)) {
                    money += parseInt(key);
                }
            }
        }
    });
    return money;
};
