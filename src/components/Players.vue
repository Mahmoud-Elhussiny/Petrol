<template>
    <DataTable :value="allplayer">
        
        <Column  bodyClass="text-center" field="playerName" header="الاسم">           
        </Column>
        <Column bodyClass="text-center" field="Attend" header="الحضور">
            <template #body = "slotProps" >
                <Checkbox v-model=slotProps.data.Attend :binary="true" />
            </template>
        </Column>
    </DataTable>
    <div class="m-4 flex justify-content-center">
        <Button class="w-6" label="حفظ" />
    </div>
</template>

<script setup>
import { ref } from "vue";


const allplayer = ref([
    {
        playerName:"محمود",
        Attend : true
    },
    {
        playerName:"على",
        Attend : false
    },
    {
        playerName:"مصطفى",
        Attend : true
    },
]);
</script>
<style scoped>
.rtl-container .p-datatable-tbody > tr {
  direction: rtl;
}

.p{
    direction: rtl;
}
</style>