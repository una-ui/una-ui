<script setup lang="ts">
const { toast } = useToast()

function fakeRequest(ms = 1800, fail = false) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (fail ? reject(new Error('nope')) : resolve('ok')), ms),
  )
}
</script>

<template>
  <div class="flex flex-col gap-6 p-6">
    <section class="flex flex-col gap-2">
      <h2 class="text-sm text-muted-foreground font-medium">
        Types
      </h2>
      <div class="flex flex-wrap gap-2">
        <NButton btn="outline-gray" label="default" @click="toast('Event has been created')" />
        <NButton
          btn="outline-gray"
          label="description"
          @click="toast('Event has been created', { description: 'Monday, January 3rd at 6:00pm' })"
        />
        <NButton btn="outline-gray" label="success" @click="toast.success('Changes saved')" />
        <NButton
          btn="outline-gray"
          label="error"
          @click="toast.error('Uh oh! Something went wrong.', { description: 'There was a problem with your request.' })"
        />
        <NButton btn="outline-gray" label="warning" @click="toast.warning('Your trial ends in 3 days')" />
        <NButton btn="outline-gray" label="info" @click="toast.info('A new version is available')" />
        <NButton btn="outline-gray" label="loading" @click="toast.loading('Uploading file…')" />
      </div>
    </section>

    <section class="flex flex-col gap-2">
      <h2 class="text-sm text-muted-foreground font-medium">
        Actions
      </h2>
      <div class="flex flex-wrap gap-2">
        <NButton
          btn="outline-gray"
          label="action"
          @click="toast('Event deleted', { action: { label: 'Undo', onClick: () => toast.success('Restored') } })"
        />
        <NButton
          btn="outline-gray"
          label="cancel"
          @click="toast('Discard draft?', { cancel: { label: 'Keep', onClick: () => {} } })"
        />
      </div>
    </section>

    <section class="flex flex-col gap-2">
      <h2 class="text-sm text-muted-foreground font-medium">
        Async
      </h2>
      <div class="flex flex-wrap gap-2">
        <NButton
          btn="outline-gray"
          label="promise"
          @click="toast.promise(fakeRequest(), { loading: 'Saving…', success: () => 'Saved', error: () => 'Failed' })"
        />
        <NButton
          btn="outline-gray"
          label="promise (reject)"
          @click="toast.promise(fakeRequest(1500, true), { loading: 'Saving…', success: () => 'Saved', error: () => 'Failed to save' })"
        />
        <NButton
          btn="outline-gray"
          label="update by id"
          @click="() => {
            const id = toast.loading('Uploading file…')
            setTimeout(() => toast.success('File uploaded', { id }), 1600)
          }"
        />
      </div>
    </section>

    <section class="flex flex-col gap-2">
      <h2 class="text-sm text-muted-foreground font-medium">
        Rich toasts
      </h2>
      <div class="flex flex-wrap gap-2">
        <NButton
          btn="outline-gray"
          label="multi-action"
          @click="toast.error('Uh oh! Something went wrong.', {
            description: 'There was a problem with your request.',
            actions: [
              { label: 'Try again', btn: 'solid-error' },
              { label: 'Details', btn: 'soft-gray' },
            ],
          })"
        />
        <NButton
          btn="outline-gray"
          label="progress"
          @click="toast.warning('Your trial ends in 3 days', { showProgress: true, progress: 'warning', duration: 6000 })"
        />
        <NButton
          btn="outline-gray"
          label="both"
          @click="toast.info('A new version is available', {
            description: 'Reload to update.',
            showProgress: true,
            duration: 8000,
            actions: [{ label: 'Reload', btn: 'solid-info' }, { label: 'Later', btn: 'soft-gray' }],
          })"
        />
      </div>
    </section>

    <section class="flex flex-col gap-2">
      <h2 class="text-sm text-muted-foreground font-medium">
        Per-toast overrides
      </h2>
      <div class="flex flex-wrap gap-2">
        <NButton
          btn="outline-gray"
          label="rich colors"
          @click="toast.error('Tinted via richColors', { richColors: true })"
        />
        <NButton
          btn="outline-gray"
          label="una override"
          @click="toast('Custom title class', { classes: { title: 'text-primary font-bold' } })"
        />
        <NButton btn="soft-gray" label="dismiss all" @click="toast.dismiss()" />
      </div>
    </section>
  </div>
</template>
