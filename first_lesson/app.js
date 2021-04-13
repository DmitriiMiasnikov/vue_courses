const App = {
  data() {
    return {
      title: "Список заметок",
      placeholderString: "Введите название",
      inputValue: "",
      notes: ["заметка 1", "заметка 2"],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    removeNote(i) {
      this.notes.splice(i, 1)
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = '';
      }
    }
  }
};

Vue.createApp(App).mount("#app");
