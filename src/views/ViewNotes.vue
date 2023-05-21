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
        v-for="note in notes"
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

const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa          commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim         quasi officiis aperiam fugit, corrupti omnis, eaque animi.",
  },
  {
    id: "id2",
    content: "Short note!",
  },
]);

const addNote = () => {
  let note = {
    id: Date.now(),
    content: newNote.value,
  };
  notes.value.unshift(note);
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
