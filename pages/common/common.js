
function sayHello(name){
  console.log('hello ' + name)
}

function sayGoodbye(name){
  console.log('goodbye ${name}!')
}

module.exports.sayHello = sayHello

exports.sayGoodbye = sayGoodbye