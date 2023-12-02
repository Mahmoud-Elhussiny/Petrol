<template>
    <div class="card">
          <Menubar :model="items" />           
    </div>
    <div>
    <RouterView />  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  
  
  const router = useRouter();
    const items = ref([
      {
        label:'الصفحه الرئيسية',
        command:()=>{
          router.push('/home')
        }
      },
      {
        label:'التدريبات',
        command: ()=>{
          router.push('/exercises')
        }
      }
    ]);
  </script>
  
  
  