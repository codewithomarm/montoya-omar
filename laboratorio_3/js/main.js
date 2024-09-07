import { verificarPalindromo } from './problema1.js';
import { contarCaracteres } from './problema2.js';
import { esBisiesto } from './problema3.js';
import { sumarPrimos } from './problema4.js';

// Problema #1 :

document.getElementById('btn_prob1').addEventListener('click', () => {
    const input1 = document.getElementById('input_prob1');
    const inputValue1 = input1.value;
    const resultado1 = verificarPalindromo(inputValue1);

    document.getElementById('resultado1').textContent = resultado1;
});

document.getElementById('btn_limp1').addEventListener('click', () => {
    document.getElementById('input_prob1').value = '';
    document.getElementById('resultado1').textContent = '';
});

// Problema #2 :

document.getElementById('btn_prob2').addEventListener('click', () => {
    const input2 = document.getElementById('input_prob2');
    const inputValue2 = input2.value;
    const resultado2 = contarCaracteres(inputValue2);

    document.getElementById('resultado2').textContent = resultado2;
});

document.getElementById('btn_limp2').addEventListener('click', () => {
    document.getElementById('input_prob2').value = '';
    document.getElementById('resultado2').textContent = '';
});

// Problema #3 :

document.getElementById('btn_prob3').addEventListener('click', () => {
    const input3 = document.getElementById('input_prob3');
    const inputValue3 = input3.value;
    const resultado3 = esBisiesto(inputValue3);

    document.getElementById('resultado3').textContent = resultado3;
});

document.getElementById('btn_limp3').addEventListener('click', () => {
    document.getElementById('input_prob3').value = '';
    document.getElementById('resultado3').textContent = '';
});

// Problema #4 :

document.getElementById('btn_prob4').addEventListener('click', () => {
    const input4 = document.getElementById('input_prob4');
    const inputValue4 = input4.value;
    const resultado4 = sumarPrimos(inputValue4);

    document.getElementById('resultado4').textContent = resultado4;
});

document.getElementById('btn_limp4').addEventListener('click', () => {
    document.getElementById('input_prob4').value = '';
    document.getElementById('resultado4').textContent = '';
});
