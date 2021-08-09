// 4.1. Fonctions (1)

function retain(f, hash) {
  var elems = {};

  for (var k in hash) {
    var v = hash[k];
    if (f(v, k)) {
      elems[k] = v;
    }
  }
  return elems;
}

// 4.2

retain[((k, v) => typeof v == "string", obj)];


// 4.3 

var fibonacci = function (x) {
  if (x <= 1) return x;
  return fibonacci(x - 1) + fibonacci(x - 2);
};


var cachedFibonacci = function() {
    var fibs ={0:0,1:1};
    return{
        fibs: function(x) {
                if(x in fibs){
                    return fibs[x];
                }
                var f = this.fibs(x-1) + fibs(x-2);
                fibs(x) = f;
                return f;
    },
    reset : function() {
        fibs =  {0:0,1:1};   
    }

    }
}