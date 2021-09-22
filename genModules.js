// generate a tree of nested modules
const fs = require('fs')

// layers of nested imports
const MAX_DEPTH = 3
// parallel module imports per layer
const concurrency = 7

let total = 0

fs.rmSync('modules', { recursive: true })
fs.mkdirSync('modules')

function genFile(id, depth) {
  total++
  if (depth >= MAX_DEPTH) {
    fs.writeFileSync(`./modules/${id}.ts`, '')
    return
  }
  let content = ''
  for (let i = 0; i < concurrency; i++) {
    const childId = `${id}_${i}`
    content += `\nimport './${childId}.ts'`
    genFile(childId, depth + 1)
  }
  // console.log(`writing ${id}`)
  if (id === 'main') {
    content += `\nalert(performance.now())`
  }
  fs.writeFileSync(`./modules/${id}.ts`, content)
}

genFile('main', 0)
console.log(`generated ${total} files.`)
