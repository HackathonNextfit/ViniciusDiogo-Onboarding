import React from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

function Step2({ nextStep, prevStep, handleChange, formData }) {
  return (
    <div>
      <h2>Insira os dados do contrato:</h2>
      <Box mb="5%">
        <TextField
          label="Título do Contrato"
          onChange={handleChange('contractTitle')}
          value={formData.contractTitle}
          fullWidth
        />
      </Box>
      <Box mb="5%">
        <FormControl fullWidth>
          <InputLabel>Duração</InputLabel>
          <Select
            value={formData.contractDuration}
            onChange={handleChange('contractDuration')}
            label="Duração"
          >
            <MenuItem value="1">1 mês</MenuItem>
            <MenuItem value="2">2 mês</MenuItem>
            <MenuItem value="3">3 meses</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mb="5%">
        <TextField
          label="Valor total do contrato"
          onChange={handleChange('contractValue')}
          value={formData.contractValue}
          fullWidth
        />
      </Box>
      <Button variant="contained" color="secondary" onClick={prevStep}>
        Voltar
      </Button>
      <Button variant="contained" color="primary" onClick={nextStep}>
        Próximo
      </Button>
    </div>
  );
}

export default Step2;
