<template>
  <!-- horizontal variant -->
  <div flex="~ col">
    <p>
      Example text 1 (base)
    </p>
    <NDivider />

    <p>
      Example text 2 (type)
    </p>
    <NDivider type="dashed" />

    <p>
      Example text 3 (slot with align)
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odio quis dicta sunt voluptas, ratione a enim architecto consequuntur officiis repudiandae autem, culpa error consectetur ipsum ullam, doloremque exercitationem debitis.
    </p>
    <NDivider align="left">
      Una UI
    </NDivider>
  </div>

  <!-- vertical variant -->
  <div flex>
    <p>Example text 1 (base)</p>
    <NDivider direction="vertical" />

    <p>Example text 2 (type)</p>
    <NDivider direction="vertical" type="dotted" />

    <p max-w-100>
      Example text 3 (slot with align)
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aspernatur esse iure nulla mollitia officia, soluta, a iste nostrum aliquam eveniet est illo dolore! Corporis delectus quo sunt dignissimos molestias!
    </p>
    <NDivider direction="vertical" align="bottom">
      Una
    </NDivider>
  </div>
</template>
