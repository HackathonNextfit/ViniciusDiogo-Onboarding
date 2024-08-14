import { IResponse } from "../../interfaces";
import { BaseService } from "../base";
import { IModalidadeContrato } from "./interfaces";

class ContratoService extends BaseService{
    protected path: string = '/ContratoBase';

    async criaContrato(Descricao: string, Tipo: number, TempoDuracao: number, TipoDuracao: number, TipoRecebimento: number, ValorTotal: string, Modalidades: IModalidadeContrato): Promise<IResponse> {
        console.log(Modalidades);
        
        const body = {
            "Tipo": 1,
            "PermiteRenovar": true,
            "TipoCobrancaAdesao": 1,
            "Modalidades": Modalidades,
            "Unidades": [
                {
                    "Unidade": {
                        "Id": 7,
                        "Fantasia": "NextFit Academia",
                        "Endereco": "Rua João Serafim",
                        "NumEndereco": "1366",
                        "Cidade": {
                            "Descricao": "Içara"
                        }
                    },
                    "CodigoUnidade": 7
                }
            ],
            "TipoRecebimento": TipoRecebimento,
            "PermiteDefinirRenovacaoAutomaticaNaVenda": false,
            "DataInicioVenda": "",
            "DataFimVenda": "",
            "CodigoCategoriaReceita": 166,
            "Descricao": Descricao,
            "TempoDuracao": TempoDuracao,
            "ValorProporcional": "100.00",
            "TipoDuracao": 2,
            "ValorTotal":ValorTotal,
            "ContabilizarAulasFormaConjunta": false
        };

        return this.post({
            params: body,
            endPoint: '',
        });
    }
}

const contratoService = ContratoService;

export default ContratoService;