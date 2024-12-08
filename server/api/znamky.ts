import type { ZnamkyRequestResponse } from '@/composables/types/types';
import { validateResultsFromString } from '@/composables/utils/regex';
import { znamkySchema } from '@/composables/utils/znamkySchema';
import { calculateAmountOfMoney } from '~/composables/utils/calculateAmountOfMoney';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const znamky = znamkySchema.parse(JSON.parse(body));

    try {
        const body = await readBody(event);
        const znamky = znamkySchema.parse(JSON.parse(body));

        return {
            status: 'success',
            celkem: calculateAmountOfMoney(
                validateResultsFromString(znamky.text)
            ),
        } as ZnamkyRequestResponse;
    } catch (e) {
        return {
            status: 'error',
            errorMessage: (e as any).message,
        } as ZnamkyRequestResponse;
    }
});
