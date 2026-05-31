function checkSpam(str) {
  let spam = '1xBet'
  let spam2 = 'XXX'
  let exist1 = 0
  let exist2 = 0
  let j = 0
  let k = 0
  for (i = 0; i < str.length; i++){
      if (str.toLowerCase()[i] == spam.toLowerCase()[j]){
          exist1 += 1
          j += 1
      }
      if (str.toLowerCase()[i] == spam2.toLowerCase()[k]){
          exist2 += 1
          k += 1
      }
  }
  if (exist1 == spam.length || exist2 == spam2.length){
      return true
  }
  else{
      return false
  }
}
