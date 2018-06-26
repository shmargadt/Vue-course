new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result: 'not there yet'
        },
        watch: {
          value: function (newVal, oldVal) {
            if (newVal === 37) {
              this.result = 'done'
            }
          },
          result: function (newVal, oldVal) {
            if (newVal !== oldVal) {
              setTimeout(() => {
                  this.value = 0
              }, 5000)
            }
          } 
        }
    });