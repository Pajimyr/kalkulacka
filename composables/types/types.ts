export type Vysledky = {
    znamka: number;
    vaha: number;
    predmet: string;
};

export type ZnamkyRequestResponse =
    | {
          status: 'success';
          celkem: number;
      }
    | {
          status: 'error';
          errorMessage: string;
      };

export type CalcKey =
    | 'p5'
    | 'p10'
    | 'p20'
    | 'n5'
    | 'n10'
    | 'n20'
    | 'p2'
    | 'p4'
    | 'p6';
export type CalcValue = number[];
