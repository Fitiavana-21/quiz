import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {PopupDialogComponent} from "./popup-dialog/popup-dialog.component";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  defaultBackColor: string;
  defaultColor: string;
  noQuestion: number;
  selectedAnswer = 0;
  noteCollecte: number;
  choseResponse: boolean;
  isSelected: boolean;


  questions = [
    {
      'questionNo': '1',
      'label': 'What does CSS stand for?',
      'id': 1,
      'answers': [
        {
          'noItem': 'A',
          'label': 'Cascading Style Sheets',
          'value': 1,
          'response': false
        },
        {
          'noItem': 'B',
          'label': 'Pour se compliquer la vie bien sûr',
          'value': 2,
          'response': false
        },
        {
          'noItem': 'C',
          'label': 'Dans un fichier externe utilisable pour plusieurs pages',
          'value': 3,
          'response': true
        }
      ]
    },
    {
      'questionNo': '2',
      'label': 'Combien de règles peut contenir un fichier CSS ?',
      'id': 2,
      'answers': [
        {
          'noItem': 'A',
          'label': 'Il n\'y a pas de limite, on peut en créer autant que l\'on veut',
          'value': 1,
          'response': true
        },
        {
          'noItem': 'B',
          'label': 'Si le poids du fichier n\'excède pas 20Ko, c\'est tout bon',
          'value': 2,
          'response': false
        },
        {
          'noItem': 'C',
          'label': 'Cela dépend des navigateurs',
          'value': 3,
          'response': false
        }
      ]
    },
    {
      'questionNo': '3',
      'label': 'À quoi sert le sélecteur de classe : h2.nomDeClasse ? ?',
      'id': 2,
      'answers': [
        {
          'noItem': 'A',
          'label': 'Ah bon ... C\'est censé servir à quelque chose ?',
          'value': 1,
          'response': false
        },
        {
          'noItem': 'B',
          'label': 'À ajouter un peu de classe à notre code parfois un peu tristounet',
          'value': 2,
          'response': true
        },
        {
          'noItem': 'C',
          'label': 'Il n\'y a pas de limite, on peut en créer autant que l\'on veut',
          'value': 3,
          'response': false
        },
        {
          'noItem': 'D',
          'label': 'Pour se compliquer la vie bien sûr',
          'value': 4,
          'response': false
        }
      ]
    },
  ];

  constructor(
    public dialog: MatDialog,
  ) {
    this.defaultBackColor = '';
    this.defaultColor = '';
    this.noQuestion = 0;
    this.noteCollecte = 0;
    this.choseResponse = false;
    this.isSelected = true;


  }

  ngOnInit(): void {
  }

  selected(answerValue: number, choseResponse: boolean) {
    if (answerValue) {
      this.isSelected = false;
      this.selectedAnswer = answerValue;
      if (choseResponse === true) {
        this.noteCollecte++;
      }
      else {
        this.noteCollecte;
      }
        } else {
      this.isSelected = true;
    }
    console.log('noteCollecte', this.noteCollecte);
  }

  sendAnwser() {
    if (this.questions.length > this.noQuestion + 1) {
      this.noQuestion++;
      this.selectedAnswer = 0;
      this.isSelected = true;
    } else {
      this.selectedAnswer = 0;
      this.openDialog();
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(PopupDialogComponent, {
      width: '300px',
      height: '200px',
      data: {
        trueResponse: this.noteCollecte,
        questionNumber: this.questions.length
      }
    });
  }


}
