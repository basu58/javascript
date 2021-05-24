function limits (values) {
    if (!values.length) {
      return [undefined, undefined]
    }
    let low = values[0]
    let high = values[0]
    for (let v of values) {
      if (v < low) low = v
      if (v > high) high = v
    }
    return [low, high]
  }
  x = [1.5, 2, 3, 4,5]
  console.log(limits(x));

  const allTests = [
    [],
    [9],
    [3, 30, 300],
    ['apple', 'Grapefruit', 'banana'],
    [3, 'apple', ['sub-array']]
  ]
  for (let test of allTests) {
    console.log(`limits of ${test} are ${limits(test)}`)
  }