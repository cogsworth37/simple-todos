<template>
  <div>
    <ul>
      <li v-for="task in tasks">
        {{task}} 
        <button @click="tasks.splice(tasks.indexOf(task), 1)"> Remove Task </button>
      </li>
    </ul>
    <input v-model="new_task" placeholder="Enter Task...">
    <button @click="add_task(tasks, new_task)">
      Add Task
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: ["Task 1", "Task 2", "Task 3"],
      new_task: ""
    };
  },
  methods: {
    add_task(tasks, new_task, event) {
      console.log(tasks);
      console.log(new_task);
      tasks.push(new_task)
      this.new_task = ""
    },
  }
}
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>