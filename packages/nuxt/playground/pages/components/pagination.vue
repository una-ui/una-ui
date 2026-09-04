<script setup lang="ts">
const model = ref(2)

const itemsPerPage = ref(10)
const total = 100

const metaPage = ref(3)
const metaItemsPerPage = ref(20)

// clamping: start on a high page, then grow the page size
const clampPage = ref(7)
const clampItemsPerPage = ref(10)

// standalone rows-per-page: no NPagination wrapper, driven purely by the emit
const standaloneSize = ref(20)
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

    <!-- page must be clamped when the page size grows -->
    <div class="space-y-2">
      <span id="clamp-state">page={{ clampPage }} ipp={{ clampItemsPerPage }}</span>

      <NPagination
        id="clamp-pagination"
        v-model:page="clampPage"
        v-model:items-per-page="clampItemsPerPage"
        :total
        show-info
        show-rows-per-page
        show-edges
        :_pagination-info="{ format: 'range' }"
        :_pagination-rows-per-page="{ label: 'Rows per page' }"
      />
    </div>

    <!-- disabled must reach the rows-per-page control too -->
    <div class="space-y-2">
      <span>Disabled</span>

      <NPagination
        id="disabled-pagination"
        :page="1"
        :items-per-page="10"
        :total
        disabled
        show-rows-per-page
        show-edges
      />
    </div>

    <!-- rows-per-page on its own, outside NPagination -->
    <div class="space-y-2">
      <span id="standalone-size">Standalone size: {{ standaloneSize }}</span>

      <NPaginationRowsPerPage
        id="standalone-rows-per-page"
        :items-per-page="standaloneSize"
        label="Rows per page"
        @update:items-per-page="n => standaloneSize = n"
      />
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
