<template>
  <div class="grid grid-cols-2 gap-4 rounded-lg bg-muted p-5 md:grid-cols-4">
    <!-- First row -->
    <NAspectRatio :ratio="3 / 4" rounded="3xl" class="group transform overflow-hidden transition-all duration-300 md:col-span-2 hover:scale-[1.03] hover:shadow-2xl">
      <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800" alt="Dark skyscraper silhouette" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
      <div class="absolute inset-0 flex items-center justify-center from-black/80 to-black/20 bg-gradient-to-t opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <span class="transform border border-white/20 rounded-full bg-white/10 px-5 py-2 text-white font-medium shadow-lg backdrop-blur-md transition-transform duration-300 -translate-y-2 group-hover:translate-y-0">Tower</span>
      </div>
    </NAspectRatio>

    <NAspectRatio :ratio="1 / 1" rounded="2xl" class="group transform overflow-hidden border border-gray-100 shadow transition-all duration-300 dark:border-gray-800 hover:shadow-2xl">
      <img src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=800" alt="Abstract architecture patterns" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
      <div class="absolute inset-0 flex items-center justify-center from-black/80 to-black/20 bg-gradient-to-t opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <span class="transform border border-white/20 rounded-full bg-white/10 px-5 py-2 text-white font-medium shadow-lg backdrop-blur-md transition-transform duration-300 -translate-y-2 group-hover:translate-y-0">Minimal</span>
      </div>
    </NAspectRatio>

    <NAspectRatio :ratio="3 / 4" rounded="full" class="group transform overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl">
      <img src="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?q=80&w=800" alt="Geometric building architecture" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
      <div class="absolute inset-0 flex items-center justify-center from-black/80 to-black/20 bg-gradient-to-t opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <span class="transform border border-white/20 rounded-full bg-white/10 px-5 py-2 text-white font-medium shadow-lg backdrop-blur-md transition-transform duration-300 -translate-y-2 group-hover:translate-y-0">Structure</span>
      </div>
    </NAspectRatio>

    <!-- Second row -->
    <NAspectRatio :ratio="16 / 9" rounded="lg" class="group col-span-2 transform overflow-hidden shadow-md transition-all duration-300 md:col-span-4 hover:scale-[1.02] hover:shadow-2xl">
      <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" alt="Modern architectural building" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
      <div class="absolute inset-0 flex items-center justify-center from-black/80 to-black/20 bg-gradient-to-t opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <span class="transform border border-white/20 rounded-full bg-white/10 px-5 py-2 text-white font-medium shadow-lg backdrop-blur-md transition-transform duration-300 -translate-y-2 group-hover:translate-y-0">Widescreen</span>
      </div>
    </NAspectRatio>
  </div>
</template>
