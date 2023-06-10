<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">
      {{ label }}
    </label>

    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue ? modelValue : ''"
          @input="handleInput($event, $emit)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
          max-length="100"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

defineEmits(["update:modelValue"]);

const handleInput = (event, $emit) => {
  $emit("update:modelValue", event.target.value.trim());
};

const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>

<style lang="scss" scoped></style>
