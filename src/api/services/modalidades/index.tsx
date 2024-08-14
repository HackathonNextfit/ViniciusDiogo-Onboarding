import { IResponse } from "../../interfaces";
import { BaseService } from "../base";

class ModalidadeService extends BaseService {
    protected path: string = '/Modalidade';

    async recuperaModalidade(page: number = 1, limit: number = 25): Promise<IResponse> {
        return this.get({
            params: {
                filter: JSON.stringify([
                    {
                        property: "Inativo",
                        operator: "equal",
                        value: false,
                    }
                ]),
                limit,
                page,
            },
            endPoint: '',
        });
    }

    async adicionarModalidade(Descricao: string, UtilizaAgenda: boolean, UtilizaWod: boolean, Logo: number): Promise<IResponse> {
        return this.post({
            params: { Descricao, UtilizaAgenda, UtilizaWod, Logo },
            endPoint: 'Inserir',
        });
    }
}

const modalidadeService = new ModalidadeService();

export default ModalidadeService;