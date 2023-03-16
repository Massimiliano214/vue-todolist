const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList: [
            {
                text: "spesa",
                done: "true",
            },
            {
                text: "compiti",
                done: "false",
            },
            {
                text: "pulizie",
                done: "false",
            },
            {
                text: "cucinare",
                done: "true",
            },
        ]
      }
    },
    methods: {
        
    },
  }).mount('#app')