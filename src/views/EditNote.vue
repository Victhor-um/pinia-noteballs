<template>
  <div class="edit-note">
    <AddEditNote
      :modelValue="noteContent"
      @update:modelValue="noteContent = $event"
      bgColor="link"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "../components/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
