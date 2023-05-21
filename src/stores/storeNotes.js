import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa          commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim         quasi officiis aperiam fugit, corrupti omnis, eaque animi.",
        },
        {
          id: "id2",
          content: "Short note!",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let note = {
        id: Date.now(),
        content: newNoteContent,
      };
      this.notes.unshift(note); // затратный метод, лучшеп переписать на push, и попытаться отрисосывать с конца масива мб
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
