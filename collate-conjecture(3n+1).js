var hotpo = function(n){
    let count = 0
    while(true){
      if (n == 1){
        return count
      }
      if (n%2 == 0){
        n = n / 2
      }
      else {
        n = 3 * n + 1
      }
      count += 1
      
    }
    
}
