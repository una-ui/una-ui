<script setup lang="ts">
const model = ref(2)

const itemsPerPage = ref(10)
const total = 100

const metaPage = ref(3)
const metaItemsPerPage = ref(20)
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-2">
      <span>Current Page: {{ model }}</span>

      <NPagination
        v-model:page="model"
        :items-per-page="10"
        :total="100"
        show-edges
      />
    </div>

    <!-- meta parts, opt-in -->
    <div class="space-y-2">
      <span>Info — page / range / total</span>

      <NPagination
        v-model:page="metaPage"
        :items-per-page="metaItemsPerPage"
        :total
        show-info
        show-edges
      />

      <NPagination
        v-model:page="metaPage"
        :items-per-page="metaItemsPerPage"
        :total
        show-info
        show-edges
        :_pagination-info="{ format: 'range' }"
      />

      <NPagination
        v-model:page="metaPage"
        :items-per-page="metaItemsPerPage"
        :total
        show-info
        show-edges
        :_pagination-info="{ format: 'total' }"
      />
    </div>

    <!-- rows per page writes back through v-model:items-per-page -->
    <div class="space-y-2">
      <span>Rows per page: {{ itemsPerPage }}</span>

      <NPagination
        v-model:page="model"
        v-model:items-per-page="itemsPerPage"
        :total
        show-info
        show-rows-per-page
        show-edges
        :_pagination-rows-per-page="{ label: 'Rows per page' }"
        :_pagination-info="{ format: 'range' }"
      />
    </div>

    <!-- start / end regions, and the info scoped slot -->
    <div class="space-y-2">
      <span>Custom regions</span>

      <NPagination
        v-model:page="metaPage"
        :items-per-page="metaItemsPerPage"
        :total
        show-edges
      >
        <template #start>
          <NPaginationInfo v-slot="{ first, last, total: rows }">
            <span class="text-sm">{{ first }}–{{ last }} of {{ rows }} results</span>
          </NPaginationInfo>
        </template>

        <template #end>
          <NBadge badge="soft-primary" label="end region" />
        </template>
      </NPagination>
    </div>

    <!-- standalone, no NPagination wrapper -->
    <div class="space-y-2">
      <span>Standalone info</span>

      <NPaginationInfo
        format="range"
        :page="2"
        :page-count="5"
        :items-per-page="10"
        :total="42"
      />
    </div>
  </div>
</template>
