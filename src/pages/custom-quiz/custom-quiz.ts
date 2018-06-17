import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import * as _ from "lodash";
import { PrepararSimuladoPage } from "../preparar-simulado/preparar-simulado";

@IonicPage()
@Component({
  selector: "page-custom-quiz",
  templateUrl: "custom-quiz.html"
})
export class CustomQuizPage {
  NumeroQuestoes: number = 0;
  disciplinas: any;
  disciplina: any;
  disciplinasSelecionadas: Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.NumeroQuestoes = 20;

    this.disciplinas = [
      "Ética",
      "Filosofia",
      "Constitucional",
      "Direito Humanos",
      "Internacional",
      "Tributário",
      "Administrativo",
      "Ambiental",
      "Civil",
      "ECA",
      "CDC",
      "Empresarial",
      "Processo Civil",
      "Penal",
      "Processo Penal",
      "Direito do Trabalho",
      "Processo do Trabalho"
    ];
    this.disciplina = this.disciplinas[0];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomQuizPage", _.get(this, "NumeroQuestoes"));
  }

  goHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  start() {
    console.log("start called!");
    this.updateDisciplinas();
    /* this.updateDisciplinas().then(_disciplinas => {
      console.log("start:", _disciplinas);
      //this.navCtrl.setRoot(PrepararSimuladoPage);
    }); */
  }

  adicionarQuestoes() {
    this.NumeroQuestoes = this.NumeroQuestoes + 1;
  }

  removerQuestoes() {
    if (this.NumeroQuestoes > 0) {
      this.NumeroQuestoes = this.NumeroQuestoes - 1;
    }
  }

  normalizeString(str) {
    return str
      .replace(/ /g, "_")
      .replace("?", "")
      .normalize("NFD") // Formato de Normalização Canônico de Decomposição.
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  onChange(disciplina, checked) {
    let normalizedString = this.normalizeString(disciplina);

    if(checked){
      this.disciplinasSelecionadas.push({
        key: disciplina,
        normalizeRef: normalizedString,
        value: checked
      });
    }else{
      this.disciplinasSelecionadas = _.remove(this.disciplinasSelecionadas, arr => {
        return arr.normalizeRef == normalizedString;
      })
    }
    
  }

  updateDisciplinas() {
     return new Promise(resolve => {
      var auxArr = [];
      var currIndex = 0;
      var length = _.size(this.disciplinasSelecionadas);
      console.log("updateDisciplinas lenght:", length);
      console.log("updateDisciplinas disciplinasSelecionadas:", this.disciplinasSelecionadas);
      if (length > 0) {
        _.each(this.disciplinasSelecionadas, item => {
          console.log("updateDisciplinas each item:", item);
          if (item.value == true) {
            auxArr.push(item);
          }
          currIndex++;
          if (currIndex === length) {
            console.log("updateDisciplinas:", auxArr);
            resolve(auxArr);
          }
        });
      }
    });
  }
}
