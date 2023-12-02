<template>
  <Dialog v-model:visible="isvisable" class="w-6">
    <div class="card flex justify-content-center">
      <Dropdown
        v-model="selectedTeam"
        :options="Teams"
        optionLabel="name"
        placeholder="اختر الفريق"
        class="w-full m-4"
      />

      <Dropdown
        v-model="selectedStadium"
        :options="Stadiums"
        optionLabel="name"
        placeholder="اختر الملعب"
        class="w-full m-4"
      />
    </div>
    <div class="flex justify-content-center">
      <Button class="mt-5 w-6" label="اضافه" @click="closeDilaog" />
    </div>
  </Dialog>

  <div class="grid m-5">
    <div class="col-5">
      <Calendar
        class="w-6"
        placeholder="يوم التدريب"
        dateFormat="dd/mm/yy"
        showButtonBar
        v-model="selectedDate"
      />
    </div>
    <div class="col-5">
      <Dropdown
        v-model="selectedStadium"
        :options="allStaduims"
        optionLabel="title"
        placeholder="اختر التمرينه"
        class="w-6"
      />
    </div>
    <div class="col-2">
      <Button
        label="اضافه تمرينه"
        severity="success"
        @click="openDilaog"
        class="w-full"
      />
    </div>
    <div class="col-4"></div>
    <div class="my-1 col-4">
      <Button
        label="بحـــــــــــــث"
        severity="primary"
        @click="openDilaog"
        class="w-full"
      />
    </div>
  </div>

  <div class="grid p-5 justify-content-center">
    <div class="border-double border-round border-primary col-12 lg:col-5">
      <h1>الجهاز</h1>
    </div>
    <div class="col-12 lg:col-1"></div>
    <div class="border-double border-round border-primary col-12 lg:col-5">
      <h1>اللاعبين</h1>
      <players />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, toRefs, computed } from "vue";
import players from "../components/Players.vue";
import { useStore } from "vuex";

const store = useStore();

// const { getAllTeams, getAllStadiums } = useStore();

const isVisibile = ref(false);
const selectedTeam = ref(null);
const selectedDate = ref(null);
const selectedStadium = ref(null);
const allStaduims = ref([]);

// const { GetAllTeams, GetAllStadiums } = toRefs(store.getAllTeams());

const Stadiums = computed(() => store.getters.GetAllStaduims);

// watch(selectedTeam, (newValue) => {
//   store.getAllTeams.commit("SetSelectedTeam", newValue);
// });

// watch(selectedStadium, (newValue) => {
//   getAllStadiums().commit("SetSelectedStadium", newValue);
// });

const openDialog = () => {
  selectedStadium.value = null;
  selectedTeam.value = null;
  isVisibile.value = true;
};

const closeDialog = () => {
  isVisibile.value = false;
};

const getAllStadiums = async () => {
  try {
    await store.dispatch("AllStaduims").then((res) => {
      allStaduims.value = res;
      console.log("responsseeeee", res);
    });
  } catch (error) {
    console.error("Error fetching AllStaduims:", error);
  }
};

onMounted(async () => {
  getAllStadiums();
});
</script>

<style></style>
