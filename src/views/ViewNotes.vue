<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            class="button is-link has-background-success"
            :disabled="!newNote"
          >
            Add New Note
          </button>
        </div>
      </div>
      <SimpleNote
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
        @deleteClicked="deleteNote"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import SimpleNote from "@/components/SimpleNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const newNote = ref("");
const newNoteRef = ref(null);

const storeNotes = useStoreNotes();
const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>

<style lang="scss" scoped></style>
