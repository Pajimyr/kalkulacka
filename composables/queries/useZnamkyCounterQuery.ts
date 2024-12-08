import { useQuery } from '@tanstack/vue-query';
import type { ZnamkyRequestResponse } from '../types/types';

export const useZnamkyCounterQuery = (data: { text: string }) =>
    useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const response = await fetch('/api/znamky', {
                method: 'POST',
                body: JSON.stringify({
                    text: data.text,
                }),
            });

            const vysledek: ZnamkyRequestResponse = await response.json();
            return vysledek;
        },
    });
