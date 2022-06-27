const {returnTwo} = require(`./functions`);

test('get a two', () => {
    expect(returnTwo()).toEqual(2)
})

// describe('', () => {
//     test ('', () => {
//         expect(greeting('James')).toEqual("Hello, James.")
//     })
//     test ('', () => {
//         expect(greeting('Jill')).toEqual("Hello, Jill.")
//     })
// })

// describe('', () => {
//     test ('', () => {
//         expect((add(1,2)).toEqual(3))
//     })
//     test ('', () => {
//         expect((add(5,9)).toEqual(14))
//     })
// })