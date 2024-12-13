export type Vysledky = {
    znamka: number;
    vaha: number;
    predmet: string;
};

export type ZnamkyRequestResponse =
    | {
          status: 'success';
          celkem: number;
          results: Vysledky[];
      }
    | {
          status: 'error';
          errorMessage: string;
      };

export type CalcKey =
    | '5'
    | '10'
    | '20'
    | 'n5'
    | 'n10'
    | 'n20'
    | '2'
    | '4'
    | '6';
export type CalcValue = number[];
