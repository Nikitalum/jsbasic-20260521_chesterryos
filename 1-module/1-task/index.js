function factorial(n) {
  let i
  let fac = 1
  for (i = 0; i < n; i++){
    fac = fac * (n - i)
  }
  return fac
}
