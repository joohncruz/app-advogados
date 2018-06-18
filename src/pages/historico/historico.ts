import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimuladoProvider } from '../../providers/simulado/simulado';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  user: any;
  historicos = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private simuladoProvider: SimuladoProvider
  ) {
    this.user = {
      nome: 'teste',
      exames: [
        {
          ano: 2018,
          questions: {
            constitucional: {
              1: {
                pergunta: "eu amo nicolas constitucional?",
                resposta_correta: "a",
            resposta_informada: "b",
                respostas: {
                  a: {
                    descricao: "sim constitucional a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não constitucional b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não constitucional c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não constitucional d",
                    justificativa: "por que não"
                  }
                }
              },
              2: {
                pergunta: "eu amo nicolas constitucional dois?",
                resposta_correta: "a",
            resposta_informada: "a",
                respostas: {
                  a: {
                    descricao: "sim constitucional a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não constitucional b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não constitucional c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não constitucional d",
                    justificativa: "por que não"
                  }
                }
              }
            },
            etica: {
              1: {
                pergunta: "eu amo nicolas etica?",
                resposta_correta: "a",
            resposta_informada: "b",
                respostas: {
                  a: {
                    descricao: "sim etica a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não etica b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não etica c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não etica d",
                    justificativa: "por que não"
                  }
                }
              }
            }
          }
        },
        {
          ano: 2016,
          questions: {
            constitucional: {
              1: {
                pergunta: "eu amo nicolas constitucional?",
                resposta_correta: "a",
            resposta_informada: "b",
                respostas: {
                  a: {
                    descricao: "sim constitucional a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não constitucional b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não constitucional c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não constitucional d",
                    justificativa: "por que não"
                  }
                }
              },
              2: {
                pergunta: "eu amo nicolas constitucional dois?",
                resposta_correta: "a",
            resposta_informada: "a",
                respostas: {
                  a: {
                    descricao: "sim constitucional a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não constitucional b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não constitucional c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não constitucional d",
                    justificativa: "por que não"
                  }
                }
              }
            },
            etica: {
              1: {
                pergunta: "eu amo nicolas etica?",
                resposta_correta: "a",
                resposta_informada: "a",
                respostas: {
                  a: {
                    descricao: "sim etica a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não etica b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não etica c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não etica d",
                    justificativa: "por que não"
                  }
                }
              }
            }
          }
        },
        {
          ano: 2017,
          questions: {
            constitucional: {
              1: {
                pergunta: "eu amo nicolas constitucional?",
                resposta_correta: "a",
            resposta_informada: "a",
                respostas: {
                  a: {
                    descricao: "sim constitucional a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não constitucional b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não constitucional c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não constitucional d",
                    justificativa: "por que não"
                  }
                }
              },
              2: {
                pergunta: "eu amo nicolas constitucional dois?",
                resposta_correta: "a",
            resposta_informada: "a",
                respostas: {
                  a: {
                    descricao: "sim constitucional a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não constitucional b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não constitucional c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não constitucional d",
                    justificativa: "por que não"
                  }
                }
              }
            },
            etica: {
              1: {
                pergunta: "eu amo nicolas etica?",
                resposta_correta: "a",
            resposta_informada: "a",
                respostas: {
                  a: {
                    descricao: "sim etica a",
                    justificativa: "por que sim"
                  },
                  b: {
                    descricao: "não etica b",
                    justificativa: "por que não"
                  },
                  c: {
                    descricao: "não etica c",
                    justificativa: "por que não"
                  },
                  d: {
                    descricao: "não etica d",
                    justificativa: "por que não"
                  }
                }
              }
            }
          }
        },
      ]
    }
    this.historicos = this.user.exames.map(exam => ({ exam, resultado: this.simuladoProvider.getResult(exam) }))
    console.log(this.historicos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }

  close() {
    this.navCtrl.setRoot(HomePage);
  }
}
