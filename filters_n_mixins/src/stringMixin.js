export default {
  computed: {
    reverseComputed () {
      return this.textToReverse.split("").reverse().join("");
    }, 
    addLengthComputed () {
      return value + " (" + value.length + ")";
    }
  }
}