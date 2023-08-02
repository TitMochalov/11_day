
const user = {

  name: 'Tit',
  age: 22,
  eyeColor: 'hazel'

}

console.log(user)

// ========================================================
const users = [
  {
    tit: {
      age: 22,
      eyeColor: 'hazel',
      sayHello(name) {
        console.log(`Hello ${name}`)
      }
    }
  }
];


users[0].tit.sayHello('Tit')

// users[0] нельзя обратиться к свойству tit напрямую таким образом user, потому что user - это массив, а не объект. Для доступа к элементам массива по индексу,  необходимо использовать индексирование [ ]. Например, чтобы получить объект tit из массива user, можно использовать user[0].tit, так как объект находится на нулевой позиции массива.
// =====================================================

const userss = [
  {
    name: 'tit',
    age: 22,
    isAdmin: true
  },
  {
    name: 'yulia',
    age: 21,
    isAdmin: false
  },
  {
    name: 'tanya',
    age: 23,
    isAdmin: false
  }
]

let ordinaryUsers = 0;

for (let i = 0; i < userss.length; i++) {
  if (!userss[i].isAdmin) {                                 
    ordinaryUsers++
  }
}

console.log(ordinaryUsers)

// !userss означает количество обычных пользователей
// userss означаеет количиство админов
