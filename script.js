/*
  made by luke baja
*/

!function() {
  window.CCF = class {
    fullCombinationSearch(searchString, searchFunction) {
      let running;

      return {
        start: function() {
          running = true;

          const numArray = [0], searchLength = searchString.length;
          let index = 0;

          function add(arrayIndex) {
            if (numArray[arrayIndex] + 1 === searchLength) {
              numArray[arrayIndex] = 0;
              if (arrayIndex + 1 === numArray.length) {
                numArray.push(0);
              } else {
                add(arrayIndex + 1);
              }
            } else {
              numArray[arrayIndex]++;
            }
          }

          function toString(array, keyString) {
            let string = "";

            array.forEach(num => {
              string += keyString[num];
            });

            return string;
          }

          async function loop() {
            searchFunction({
              value: toString(numArray, searchString), 
              index
            });

            add(0);
            index++;

            if (running) {
              loop();
            }
          }
          loop();
        },

        stop: function() {
          running = false;
        }
      };
    }

    ////
    async alternateCharacterSearch(searchArray, searchFunction) {
      let running;
      const multiLengthArray = [];

      searchArray.forEach(array => {
        if (array.length > 1) {
          multiLengthArray.push(array);
        }
      })

      return {
        start: function() {
          running = true;
          
          const numArray = [0], searchLength = multiLengthArray.length;
          let index = 0;

          function add(arrayIndex) {
            if (numArray[arrayIndex] + 1 === searchLength) {
              numArray[arrayIndex] = 0;
              if (arrayIndex + 1 === numArray.length) {
                numArray.push(0);
              } else {
                add(arrayIndex + 1);
              }
            } else {
              numArray[arrayIndex]++;
            }
          }

          function toString(array, keyString) {
            let string = "";

            array.forEach(num => {
              string += keyString[num];
            });

            return string;
          }

          async function loop() {
            searchFunction({
              value: toString(numArray, searchString), 
              index
            });

            add(0);
            index++;

            if (running) {
              loop();
            }
          }
          loop();
        },

        stop: function() {
          running = false;
        }
      };
    }
    ////
  }
}();

const finder = new CCF();

const alternateCharacterSearch = finder.alternateCharacterSearch(
  [
    [],
    [],
    [],
    []
  ],
  function(object) {
    //
  }
);

/*
const fullCombinationSearch = finder.fullCombinationSearch(
  "zxcvxz",
  function(object) {
    console.log(object.index)

    if(object.index>100){
      fullCombinationSearch.stop()
    }
  }
);

fullCombinationSearch.start();
*/