import React, { useState, useEffect } from 'react';

const IMCForm = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const calculatedIMC = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setImc(calculatedIMC);
      classifyIMC(calculatedIMC);
      setSubmitted(false);
    }
  }, [submitted, height, weight]);

  const classifyIMC = (imc) => {
    if (imc < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassification('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setClassification('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setClassification('Obesidade grau 1');
    } else if (imc >= 35 && imc < 39.9) {
      setClassification('Obesidade grau 2');
    } else if (imc >= 40) {
      setClassification('Obesidade grau 3');
    } else {
      setClassification('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <h3>Seu IMC é: {imc}</h3>
          <h4>Classificação: {classification}</h4>
        </div>
      )}
    </div>
  );
};

export default IMCForm;
