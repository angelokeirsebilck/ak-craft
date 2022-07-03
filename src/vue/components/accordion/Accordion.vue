<script setup>
import { reactive } from 'vue'
import AccordionPanel from './AccordionPanel.vue'

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})
const state = reactive({ accordionItems: [], activeIndex: 0 })

state.accordionItems = props.items.map((item, index) => {
    return {
        ...item,
        isOpen: index == state.activeIndex ? true : false
    }
})

function changeOpenState(itemToChange) {
    state.accordionItems = state.accordionItems.map((item, index) => {
        let doOpen
        if (itemToChange === index && item.isOpen == false) {
            doOpen = true
        }

        return {
            ...item,
            isOpen:
                (index == itemToChange && state.activeIndex !== itemToChange) ||
                doOpen
                    ? true
                    : false
        }
    })
    state.activeIndex = itemToChange
}
</script>

<template>
    <div class="w-full">
        <div
            v-for="(item, index) in state.accordionItems"
            :key="index"
            class="relative"
        >
            <AccordionPanel
                :index="index"
                :title="item.itemTitle"
                :body="item.itemText"
                :isOpen="item.isOpen"
                :activeIndex="state.activeIndex"
                @change-state="changeOpenState"
            ></AccordionPanel>
        </div>
    </div>
</template>
