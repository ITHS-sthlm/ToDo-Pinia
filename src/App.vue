<template>
    <main>
        <header>
            <img src="./assets/task.svg" alt="taskimage" />
            <h1>Todo Lista</h1>
        </header>
    </main>
    <nav class="filter">
        <button @click="filter = 'all'">Alla todo´s</button>
        <button @click="filter = 'favs'">Favoriter</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
        <p>Du har  {{ taskStore.totalCount }} todo´s kvar att göra</p>
        <div v-for="task in taskStore.tasks" :key="task.id">
            <TaskDetails :task="task" />
        </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
        <p>Du har  {{ taskStore.favCount }} todo´s kvar i favoriter att göra</p>
        <div v-for="task in taskStore.favs" :key="task.id">
            <TaskDetails :task="task" />
        </div>
    </div>
</template>

<script>
    import TaskDetails from './components/TaskDetails.vue'
    import { useTaskStore } from './stores/TaskStore'
    import {ref } from 'vue'

    export default {
        components: { TaskDetails },
        setup() {
            const taskStore = useTaskStore()

            const filter = ref('all')

            return { taskStore, filter }
        }
    }
</script>
