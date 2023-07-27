const DraggableProgress = {
    name: "DraggableProgress",
    props: {
      max: {
        type: Number,
        default: 0
      },
      value: {
        type: Number,
        default: 0
      },
      step: {
        type: Number,
        default: 0.1
      },
      disable: {
        type: Boolean,
        default: false
      }
    },
    template: `
      <div class="draggable-progress">
        <progress :max="max" :value="value"></progress>
        <input
          class="no-default-style color bar gradient"
          type="range"
          min="0"
          :max="max"
          :step="step"
          :value="value"
          :disabled="disable"
          @input="changeCurrentValue"
        />
      </div>
    `,
    methods: {
      changeCurrentValue(e) {
        this.$emit("input", e.target.value);
      }
    }
  };
  
  // Vue Instance
  new Vue({
    el: "#app",
    components: {
      DraggableProgress
    },
    data() {
      return {
        max: 100,
        value: 40
      }
    },
    methods: {
      changeCurrentValue(value) {
        this.value = value;
      }
    }
  });