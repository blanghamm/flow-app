<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel
} from '@headlessui/vue'

const days = [
  { id: 1, day: 'Today' },
  { id: 2, day: 'Tomorrow' }
]

interface Props {
  modelValue: string
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: object): void
}>()
defineProps<Props>()
</script>

<template>
  <Listbox
    :modelValue="modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value.day)"
  >
    <ListboxLabel class="block mb-2 text-sm font-medium text-gray-500"
      >Day</ListboxLabel
    >
    <div class="relative mt-1">
      <ListboxButton
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5"
      >
        <span class="truncate capitalize">{{ modelValue }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <Icon
            name="ph:caret-down"
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm capitalize"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in days"
            :key="option.day"
            :value="option"
          >
            <li
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-10 pr-4 capitalize'
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate capitalize'
                ]"
                >{{ option.day }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"
              >
                <Icon name="ph:check-bold" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<style scoped></style>
