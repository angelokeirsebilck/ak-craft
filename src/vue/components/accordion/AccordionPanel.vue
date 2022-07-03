<script setup>
import { ref } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    isOpen: {
        type: Boolean,
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    activeIndex: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['change-state'])

const bodyEl = ref(null)
let height = 0

function handleClick() {
    emit('change-state', props.index)
    height = bodyEl.value.scrollHeight

    if (props.isOpen && props.activeIndex == props.index) {
        close()
    } else {
        open()
    }
}

function open() {
    bodyEl.value.style.maxHeight = `${0}px`

    setTimeout(() => {
        bodyEl.value.style.maxHeight = `${height}px`
    }, 1)
}

function close() {
    bodyEl.value.style.maxHeight = `${height}px`

    setTimeout(() => {
        bodyEl.value.style.maxHeight = `${0}px`
    }, 1)
}

function handleTransition() {
    bodyEl.value.style.maxHeight = ''
}
</script>

<template>
    <div class="w-full">
        <div class="relative border-b cursor-pointer border-tertiary-default">
            <div
                class="flex justify-between py-5 font-medium transition-colors text-22 md:hover:text-secondary-default lg:py-7 lg:text-24"
                :class="{
                    'text-secondary-default': props.isOpen,
                    'pt-0': index == 0
                }"
                @click="handleClick"
            >
                <span v-html="props.title"></span>
                <div
                    class="flex h-[34px] w-[34px] items-center justify-center rounded-xl bg-secondary-default"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        class="transition-transform"
                        xmlns="http://www.w3.org/2000/svg"
                        :class="{ 'rotate-180 transform': isOpen }"
                    >
                        <path
                            d="M11 6.85198L6 11.241M6 11.241L1 6.85198M6 11.241L6 1"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div
                class="prose mb-5 overflow-hidden pr-8 text-24 transition-[max-height] will-change-[max-height] lg:mb-7"
                :class="{
                    'invisible absolute opacity-0': !props.isOpen
                }"
                ref="bodyEl"
                v-html="props.body"
                @transitionend="handleTransition"
            ></div>
        </div>
    </div>
</template>
