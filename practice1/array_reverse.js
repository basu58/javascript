let current = 0
let table = []
while (current < 5) {
  const entry = `square of ${current} is ${current * current}`
  table.push(entry)
  current += 1
}
for (let l of table) {
    console.log(l)
    
}
table.reverse()
for (let line of table) {
  console.log(line)
}