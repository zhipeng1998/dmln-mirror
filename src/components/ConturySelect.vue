<template>
  <div>
    <el-select
      id="country-select"
      v-model="selectedCountry"
      @change="onCountryChange"
    >
      <option
        v-for="country in countries"
        :key="country.code"
        :value="country.code"
      >
        {{ country.name }}
      </option>
    </el-select>
  </div>
</template>

<script setup name="CountrySelect">
import { ref, reactive } from "vue";
const countries = [
  { code: "CN", name: "中国" },
  { code: "US", name: "美国" },
  { code: "JP", name: "日本" },
  { code: "FR", name: "法国" },
  { code: "DE", name: "德国" },
];
const selectedCountry = "";
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
