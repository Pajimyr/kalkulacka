import type { ZnamkyRequestResponse } from '@/composables/types/types';
import { validateResultsFromString } from '@/composables/utils/regex';
import { znamkySchema } from '@/composables/utils/znamkySchema';
import { calculateAmountOfMoney } from '~/composables/utils/calculateAmountOfMoney';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const znamky = znamkySchema.parse(JSON.parse(body));
        const results = validateResultsFromString(znamky.text);
        return {
            status: 'success',
            celkem: calculateAmountOfMoney(results),
            results,
        } as ZnamkyRequestResponse;
    } catch (e) {
        return {
            status: 'error',
            errorMessage: (e as any).message,
        } as ZnamkyRequestResponse;
    }
});
