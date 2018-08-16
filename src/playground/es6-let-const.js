var nameVar = 'Samit';
var namevar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Sam';
nameLet = 'smuel';
console.log('nameLet',nameLet);

const nameConst = 'Samit';
console.log('nameCost',nameConst);

//Block scoping

const fullName = 'Samit Patel';
const firstName;

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);