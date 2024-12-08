<template>
    <div>
        <textarea v-model="form.text" />
        <button @click="addZnamky()">dsa</button>
        <div>
            <p v-if="data?.status == 'success'">
                {{ data.celkem }}
            </p>
            <p v-else>
                {{ data?.errorMessage }}
            </p>
        </div>
        <div></div>
    </div>
</template>

<script setup lang="ts">
import { useZnamkyCounterQuery } from '@/composables/queries/useZnamkyCounterQuery';

const form = ref({
    text: '',
});

const { data, refetch } = useZnamkyCounterQuery(form.value);

const addZnamky = async () => {
    await refetch();
};
</script>

<style></style>
