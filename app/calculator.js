'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import Button from './components/Button';
import Operator from './components/Operator';

const Calculator = () => {
    const [numberOne, setNumberOne] = useState('');
    const [numberTwo, setNumberTwo] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumber = (value) => {
        setNumberOne(numberOne + value);
    };

    const handleOperator = (op) => {
        if (numberOne) {
            setNumberTwo(Number(numberOne));
            setNumberOne('');
            setOperator(op);
        }
    };

    const calculate = () => {
        if (numberOne && numberTwo !== null && operator) {
            const x = Number(numberOne);
            let result = numberTwo;

            switch (operator) {
                case '+':
                    result = numberTwo + x;
                    break;
                case '-':
                    result = numberTwo - x;
                    break;
                case '*':
                    result = numberTwo * x;
                    break;
                case '/':
                    result = numberTwo / x;
                    break;
                default:
                    break;
            }

            setNumberOne(result.toString());
            setNumberTwo(null);
            setOperator(null);
        }
    };

    const clear = () => {
        setNumberOne('');
        setNumberTwo(null);
        setOperator(null);
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.display}>{numberOne}</div>
            <div className={styles.buttons}>
                <Button number={7} callback={() => handleNumber('7')} />
                <Button number={8} callback={() => handleNumber('8')} />
                <Button number={9} callback={() => handleNumber('9')} />
                <Operator operand={'/'} callback={() => handleOperator('/')} />
                <Button number={4} callback={() => handleNumber('4')} />
                <Button number={5} callback={() => handleNumber('5')} />
                <Button number={6} callback={() => handleNumber('6')} />
                <Operator operand={'*'} callback={() => handleOperator('*')} />
                <Button number={1} callback={() => handleNumber('1')} />
                <Button number={2} callback={() => handleNumber('2')} />
                <Button number={3} callback={() => handleNumber('3')} />
                <Operator operand={'-'} callback={() => handleOperator('-')} />
                <Button number={0} callback={() => handleNumber('0')} />
                <button className={styles.button} onClick={clear}>C</button>
                <Operator operand={'='} callback={calculate} />
                <Operator operand={'+'} callback={() => handleOperator('+')} />
            </div>
        </div>
    );
};

export default Calculator;
