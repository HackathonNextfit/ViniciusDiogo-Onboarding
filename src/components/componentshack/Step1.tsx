import React, { useState } from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@mui/material';
import ModalidadeService from '../../api/services/modalidades';

function Step1({ nextStep }) {
  const [descricao, setDescricao] = useState('');
  const [utilizaAgenda, setUtilizaAgenda] = useState(false);
  const [utilizaWod, setUtilizaWod] = useState(false);
  const [logo, setLogo] = useState(0); // Supondo que 'logo' seja um ID numérico

  const modalidadeService = new ModalidadeService();

  const handleSubmit = () => {
    modalidadeService.adicionarModalidade(descricao, utilizaAgenda, utilizaWod, logo)
      .then(response => {
        console.log('Modalidade adicionada com sucesso', response);
        nextStep();
      })
      .catch(error => console.error('Erro ao adicionar modalidade', error));
  };

  return (
    <div>
      <h2>Defina as informações da modalidade:</h2>
      <TextField
        label="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        fullWidth
      />
      <FormControlLabel
        control={<Switch checked={utilizaAgenda} onChange={(e) => setUtilizaAgenda(e.target.checked)} />}
        label="Utiliza Agenda"
      />
      <FormControlLabel
        control={<Switch checked={utilizaWod} onChange={(e) => setUtilizaWod(e.target.checked)} />}
        label="Utiliza WOD"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Salvar e Continuar
      </Button>
    </div>
  );
}

export default Step1;
