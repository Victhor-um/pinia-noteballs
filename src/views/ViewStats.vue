<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      class="input"
      v-autofocus
      type="text"
      placeholder="DO you love noteballs??"
    />
  </div>
</template>

<script setup>
import { useStoreNotes } from "../stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";

const storeNotes = useStoreNotes();
</script>

<style lang="scss" scoped></style>
