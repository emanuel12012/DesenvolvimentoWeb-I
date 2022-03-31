import { soma } from './calculadora'

it('Soma de dois positivos', () => {
    expect(soma(-2,4)).toBe(2)
})
it('Soma positivo e negativo', () => {
    expect(soma(-2,4)).toBe(2)
})

it('Subtracao', () => {
    expect(sub(2,4)).toBe(2)
})