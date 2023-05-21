<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a href="#" @click="onDeleteClicked" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const props = defineProps({
  note: Object,
  required: true,
});
const emits = defineEmits(["deleteClicked"]);

const onDeleteClicked = () => {
  emits("deleteClicked", props.note.id);
};
const characterLength = computed(() => {
  const description =
    props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});
</script>

<style lang="scss" scoped></style>
