module.exports = [{
    name: 'crime',
    code: `
  hello
  $addButton[1;label;primary;customID]
  `
  },{
    name: 'customID',
    prototype: 'button',
    type: 'interaction',
    code: `
  $interactionreply[oh ok]
  `
  }]