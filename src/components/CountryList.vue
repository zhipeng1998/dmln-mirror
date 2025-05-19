<template>
  <div style="width: 100%">
    <el-select
      id="country-select"
      v-model="selectedCountry"
      @change="onCountryChange"
      placeholder="请选择国家"
      filterable
      :filter-method="filterCountries"
    >
      <el-option
        v-for="country in filteredCountries"
        :key="country.name_zh"
        :label="country.name_zh"
        :value="country.name_zh"
      />
    </el-select>
  </div>
</template>

<script setup name="CountryList">
import countriesData from "../common/countryList.json";
import { ref, onMounted, computed } from "vue";

const countries = ref([]);
const selectedCountry = ref(null);
const searchQuery = ref("");

const filterCountries = (query) => {
  searchQuery.value = query;
};

const filteredCountries = computed(() => {
  if (!searchQuery.value) {
    return countries.value;
  }
  return countries.value.filter((country) =>
    country.name_zh.includes(searchQuery.value)
  );
});

onMounted(() => {
  if (Array.isArray(countriesData)) {
    countries.value = countriesData;
  } else {
    console.error("countriesData 格式错误，应为数组", countriesData);
  }
});

const resetSelection = () => {
  selectedCountry.value = null;
};

defineExpose({
  selectedCountry, // 暴露响应式数据
  resetSelection,
});
</script>

<style scoped>
label {
  margin-right: 8px;
}

select {
  padding: 4px;
  font-size: 14px;
}
</style>
