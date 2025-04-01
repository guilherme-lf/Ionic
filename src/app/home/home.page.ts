import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TaskService } from '../service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  type: string = "pending"

  constructor (
    public alertController: AlertController,
    public taskService: TaskService,
    public toastController: ToastController
  ) {}

  ngOnInit() { 
    this.taskService.setFromStorage();
  }

  async presentAlertPromptAdd() {
    const alert = await this.alertController.create({
      header: 'Adicionar tarefa',
      inputs: [
        {
          name: 'task',
          type: 'text',
          placeholder: 'Digite a tarefa'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', 
        },
        {
          text: 'Salvar',
          handler: (alertData) => {
            if (alertData.task) {
              this.taskService.addTask(alertData.task, alertData.date);
            } else {
              this.presentAlertPromptAdd();
              this.presentToast();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPromptDelete(index: number) {
    const alert = await this.alertController.create({
      header: 'Excluir tarefa',
      message: 'Você tem certeza que deseja excluir essa tarefa?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', 
        },
        {
          text: 'Excluir',
          handler: (alertData) => {
            handler: () => 
              this.taskService.delTask(index);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Tarefa não pode ser vazia.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

}
