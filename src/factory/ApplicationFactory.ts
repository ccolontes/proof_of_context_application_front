import { Application } from './Application';
import { ApplicationPSORenovation } from './ApplicationPSORenovation';
import { ApplicationPSOCancelation } from './ApplicationPSOCancelation';

export enum Proccess {
  PSO = 'PSO',
  SATELITAL = 'SATELITAL',
}

export enum Procedure {
  RENOVACION = 'RENOVACION',
  CANCELACION = 'CANCELACION',
}

const Builders: Record<string, Application> = {
  [`${Proccess.PSO}-${Procedure.RENOVACION}`]: new ApplicationPSORenovation(),
  [`${Proccess.PSO}-${Procedure.CANCELACION}`]: new ApplicationPSOCancelation(),
};

export default class ApplicationFactory {
  create(proccess: Proccess, procedure: Procedure): Application | null {
    return Builders[`${proccess}-${procedure}`] || null;
  }
}
