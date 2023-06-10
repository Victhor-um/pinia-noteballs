<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button
          class="delete"
          aria-label="close"
          @click.prevent="closeModal"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click.prevent="closeModal">Cancel</button>
        <button
          class="button is-danger"
          @click.prevent="storeNotes.deleteNote(noteId)"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "../stores/storeNotes";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const closeModal = () => {
  emit("update:modelValue", false);
};
const storeNotes = useStoreNotes();
const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal, {
  ignore: [],
});
const handleKeyboard = (e) => {
  if (e.key === "Escape") closeModal();
};
onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});
onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>

<style lang="scss" scoped></style>
