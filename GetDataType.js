const data = require('./response.json');
function loadData(e) {

      
      console.log(data);
      const deff = data.library.statements.def;
      const filtered = deff.filter(defined);
      for (let i = 0; i < filtered.length; i++) {
        console.log(filtered[i].expression.operand.dataType);
      }
      function defined(set) {
          for (let j = 0; j < deff.length; j++) {
            if (set.expression.operand !== undefined) return set;
          }
      }
    
    }
  loadData();
  