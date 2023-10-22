<script lang="ts" setup>
import { onMounted, onUnmounted, reactive } from 'vue';

    const mousePointer = reactive({x: 0, y: 0})
    function updateMousePointer(event:MouseEvent) {
        mousePointer.x = event.clientX
        mousePointer.y = event.clientY
    }

    onMounted(() => {
        window.addEventListener('mousemove', updateMousePointer)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', updateMousePointer)
    })

</script>
<template>
    <slot :x="mousePointer.x" :y="mousePointer.y"></slot>
</template>