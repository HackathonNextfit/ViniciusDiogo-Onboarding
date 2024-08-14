import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import ModalidadeService from '../../api/services/modalidades';
import ContratoService from '../../api/services/contratos';

function Step3({ prevStep, formData, handleChange, handleSwitchChange }) {
  const [modalidades, setModalidades] = useState([]);
  const [selectedModalidade, setSelectedModalidade] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const modalidadeService = new ModalidadeService();
  const contratoService = new ContratoService();

  useEffect(() => {
    const recuperaModalidade = async () => {
      setLoading(true);
      setError(null);
      let page = 1;
      let lastPage = false;

      try {
        do {
          debugger;
          const response = await modalidadeService.recuperaModalidade(page);
          lastPage = response.Last;
          page++;
          setModalidades(response.Content);
        } while (!lastPage);

      } catch (err) {
        setError('Erro ao carregar as modalidades');
      } finally {
        setLoading(false);
      }
    };

    recuperaModalidade();
  }, []);

  const handleSaveContract = async () => {
    setLoading(true);
    setError(null);
    try {

      const modalidadesSalvar: any = modalidades.map((modalidade) => {
        return {
          CodigoModalidade: modalidade.Id,
          Tipo: 1
        }
      })

      await contratoService.criaContrato(
        formData.contractTitle,
        Number(selectedModalidade),
        formData.contractDuration,
        1, // TipoDuracao
        1, // TipoRecebimento
        formData.contractValue,
        modalidadesSalvar
      );
      alert('Contrato salvo com sucesso!');
      // Reset form or redirect user
    } catch (err) {
      setError('Erro ao criar o contrato');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Opções finais do contrato:</h2>
      <FormControl fullWidth margin="normal">
        <InputLabel id="modalidade-label">Modalidade</InputLabel>
        <Select
          labelId="modalidade-label"
          value={selectedModalidade}
          onChange={(e) => setSelectedModalidade(e.target.value)}
          label="Modalidade"
        >
          {modalidades.map(modalidade => (
            <MenuItem key={modalidade.Id} value={modalidade.Id}>{modalidade.Descricao}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={<Switch checked={formData.electronicSignature} onChange={handleSwitchChange('electronicSignature')} />}
        label="Requer assinatura eletrônica"
      />
      <TextField
        label="Valor Total do Contrato"
        fullWidth
        margin="normal"
        value={formData.contractValue}
        onChange={handleChange('contractValue')}
      />
      <div>
        <Button variant="contained" color="secondary" onClick={prevStep}>
          Voltar
        </Button>
        <Button variant="contained" color="primary" onClick={handleSaveContract}>
          Salvar Contrato
        </Button>
      </div>
    </div>
  );
}

export default Step3;
