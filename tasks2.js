function Robot (name) {
    this.name = name;
}

function add (op1, op2) {
    this.name = this.name || 'Human';
    return this.name + ' can count to ' + (op1 + op2);
}

const voltron = new Robot ('Voltron');

'Human can count to 1' // 0 + 1
'Voltron can count to 3' // 1 + 2
'Voltron can count to 50' // 20 + 30    

console.log (add.bind (voltron) (1, 0));
console.log (add.call (voltron, 2, 1));
console.log (add.apply (voltron, [30, 20])); 