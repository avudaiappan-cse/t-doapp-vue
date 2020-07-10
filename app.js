Vue.component("login-form", {
  template: `
    <form>
      <input placeholder="Enter Email" key="email" />
      <input type="password" placeholder="Enter Password" key="password" />
      <button>Submit</button>
    </form>
  `,
});

Vue.component("header-component", {
  props: ["title"],
  template: `
    <div style="padding:1rem;background:blueViolet;color:white;">
      <h2>{{title}}</h2>
    </div>
  `,
});

Vue.component("signup-form", {
  template: `
    <form>
      <input placeholder="Enter Email" key="email" />
      <input type="password" placeholder="Enter Password" key="password" />
      <input type="password" placeholder="Enter Confirm Password" key="confirmpassword" />
      <button>Submit</button>
    </form>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
  },
  created: function () {
    if (localStorage.getItem("todos") !== null) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        task: this.newTodo,
        id: Date.now(),
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.newTodo = "";
    },
    updateTodo: function (index) {
      this.todos[index].completed = ~this.todos[index].completed;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
});
