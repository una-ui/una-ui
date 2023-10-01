<template>
  <div class="flex gap-4">
    <NLink
      to="/elements/link"
      active-class="text-success"
    >
      Active Link
    </NLink>

    <NLink
      to="/elements/link/"
      exact-active-class="text-lime"
      exact
    >
      Exact Active Link
    </NLink>

    <NLink
      to="https://github.com/una-ui/una-ui"
      target="_blank"
      inactive-class="text-gray"
    >
      Inactive Link
    </NLink>

    <NLink
      to="/elements/link?search=something"
      active-class="text-warning"
      exact-query
    >
      Exact query
    </NLink>

    <NLink
      to="/elements/link#something"
      active-class="text-pink"
      exact-hash
    >
      Exact Hash
    </NLink>
  </div>
</template>
