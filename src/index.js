class Sorter {

  constructor() {
    // your implementation  
    this.arr = [];

    this.sortFunction = function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
    }
    
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
     return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    /* this.arr.reduce((accumulator, current, index) => {
      if(index === current) {
        accumulator.push(this.arr[current])
      }
      return accumulator;
     }, [])*/
    var arr2 = [];
    var k;

     var arr1 = this.arr.reduce(function(accumulator,current,index){
    
      if(indices.some(function(number){return number === index})){
        accumulator.push(current); 
        arr2.push(index);
      }
       return accumulator;
    },[]) 
     arr1.sort(this.sortFunction);


     for (var i = 0; i < arr2.length; i++){
         k = arr2[i];
        this.arr[k] = arr1[i] 
     }


  }

  setComparator(compareFunction) {
    // your implementation
    this.sortFunction = compareFunction;
  }
}

module.exports = Sorter;