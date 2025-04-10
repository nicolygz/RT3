
import { Somador, Subtrador, Multiplicador, Divisor } from './operacoesMatematicas';

const somador = new Somador();
const subtrador = new Subtrador();
const multiplicador = new Multiplicador();
const divisor = new Divisor();

const numero1 = 12;
const numero2 = 4;

console.log(`Soma: ${somador.calcular(numero1, numero2)}`);
console.log(`Subtração: ${subtrador.calcular(numero1, numero2)}`);
console.log(`Multiplicação: ${multiplicador.calcular(numero1, numero2)}`);
console.log(`Divisão: ${divisor.calcular(numero1, numero2)}`);
