const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoToAdd: "",
            
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
        removeToDo(index) {
            this.toDoList.splice (index,1);
        },
        addToDo(){
            console.log(this.toDoToAdd);
            this.toDoList.unshift({
                text: this.toDoToAdd,
                done: "false",
            })
        },
    },
  }).mount('#app')