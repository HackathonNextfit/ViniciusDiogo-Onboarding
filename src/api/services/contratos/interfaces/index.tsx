export interface IContratos {
  Descricao: string;
  TempoDuracao: number;
  TipoDuracao: number;
  TipoRecebimento: number;
  ValorTotal: string;
  Modalidades: IModalidadeContrato;
  Tipo: number
}

export interface IModalidadeContrato{
  CodigoModalidade: number;
  Tipo: number;
}