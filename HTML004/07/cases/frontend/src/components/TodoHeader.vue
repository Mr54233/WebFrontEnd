<template>
    <header class="header">
        <h1>Todos</h1>
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all" @click="click"></label>
        <input class="new-todo" placeholder="输入待办事项" autofocus />
    </header>
</template>

<script>
export default {
    
    methods: {
        click(){
            this.$emit("customEvent",1234)
        }
    },
};
</script>
