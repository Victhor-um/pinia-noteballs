<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <SimpleNote
      v-for="note in storeNotes.notes.toReversed()"
      :key="note.id"
      :note="note"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import SimpleNote from "@/components/SimpleNote.vue";
import AddEditNote from "@/components/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const newNote = ref("");
const addEditNoteRef = ref(null);

const storeNotes = useStoreNotes();

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};
</script>

<style lang="scss" scoped></style>
