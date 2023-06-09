import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
function generateId() {
  return uuidv4();
}
export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: generateId(),
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa          commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim         quasi officiis aperiam fugit, corrupti omnis, eaque animi.",
        },
        {
          id: generateId(),
          content: "Short note!",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let note = {
        id: this.generateId(),
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
    generateId() {
      return uuidv4();
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
