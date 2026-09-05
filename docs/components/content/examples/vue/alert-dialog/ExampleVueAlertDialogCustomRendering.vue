<template>
  <NAlertDialog>
    <NAlertDialogTrigger as-child>
      <NButton btn="outline-gray">
        Show Dialog
      </NButton>
    </NAlertDialogTrigger>
    <NAlertDialogContent>
      <NAlertDialogHeader>
        <NAlertDialogTitle>Are you absolutely sure?</NAlertDialogTitle>
        <NAlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </NAlertDialogDescription>
      </NAlertDialogHeader>
      <NAlertDialogFooter>
        <NAlertDialogCancel>
          Cancel
        </NAlertDialogCancel>
        <NAlertDialogAction>Continue</NAlertDialogAction>
      </NAlertDialogFooter>
    </NAlertDialogContent>
  </NAlertDialog>
</template>
