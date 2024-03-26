import { PrismaUsuarioRepositorio } from "../repositories/prismaUsuarioRepositorio"

interface RequisicaoCriaUsuario {
  nome: string              
  cpfCnpj: string           
  ispb: string              
  agencia: string           
  contaTransacional: string 
  tipoConta: string         
}
export class CriaUsuario {
  constructor(private repositorioUsuario: PrismaUsuarioRepositorio) {}

  async execute({
    nome,              
    cpfCnpj,           
    ispb,              
    agencia,           
    contaTransacional, 
    tipoConta}: RequisicaoCriaUsuario) {

    await this.repositorioUsuario.create({
      nome,             
      cpfCnpj,          
      ispb,             
      agencia,          
      contaTransacional,
      tipoConta,        
    })
  }
}