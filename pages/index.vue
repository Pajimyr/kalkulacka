<template>
    <div>
        <div class="textArea">
            <textarea rows="5" v-model="form.text" />
            <button class="Zhodnotit" @click="addZnamky()">Zhodnotit</button>
            <div class="errorHandling">
                <p v-if="data?.status == 'success'">
                    Celkem je to : {{ data.celkem }} Kč
                </p>
                <p v-else>{{ data?.errorMessage }}</p>
            </div>
        </div>
        <button @click="vypsatZnamky">Vypsat</button>
        <div v-if="kliknuti && data?.status == 'success'">
            <table>
                <thead>
                    <tr>
                        <th>Předmět</th>
                        <th>Známka</th>
                        <th>Váha</th>
                    </tr>
                </thead>
                <tr v-for="(item, index) in data?.results" :key="index">
                    <th>{{ item.predmet }}</th>
                    <th>{{ item.znamka }}</th>
                    <th>{{ item.vaha }}</th>
                </tr>
            </table>
        </div>
        <p v-else>Nic se neděje...</p>
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
const kliknuti = ref(false);

const vypsatZnamky = () => {
    kliknuti.value = true;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

html {
    font-family: Inter;
    display: flex;
    justify-content: center;
}
table {
    background: #ce8946;
    table-layout: fixed;
    border-collapse: collapse;
    border: 3px solid #000000;
    max-width: 100px;
}
thead th:nth-child(1) {
    width: 30%;
}

thead th:nth-child(2) {
    width: 20%;
}

thead th:nth-child(3) {
    width: 15%;
}

thead th:nth-child(4) {
    width: 35%;
}

th,
td {
    padding: 20px;
}

thead th {
    border: 3px solid #000000;
}
th {
    border-bottom: 3px solid #000000;
}

button {
    cursor: pointer;
    font-weight: 700;
    font-family: Inter;
    background: #ce8946;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
    padding-top: 10px;
    transition-duration: 0.3s;
    border-radius: 10px;
    margin: 0px;
}
button:hover {
    background: #a56525;
}
.textArea {
    height: auto;
    display: flex;
    flex-direction: column;
}

.errorHandling p {
    display: flex;
    justify-content: center;
    font-weight: 900;
}
</style>
