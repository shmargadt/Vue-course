new Vue({
        el: '#exercise',
        data: {
            value: '',
            keyDownValue: '',
            EnterValue: ''
        },
        methods: {
            showAlert: function() {
              alert('The Button got clicked');
            },
            storeOnKeydown: function(event) {
              this.keyDownValue = event.target.value;
            },
            storeOnEnter: function(event) {
              this.EnterValue = event.target.value;
            }
        }
    });