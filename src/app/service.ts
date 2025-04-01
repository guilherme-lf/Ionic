import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    

    private tasks: Task[] = [];
    constructor() {}

    setFromStorage() {
        console.log("Método setFromStorage chamado!");
        // Código para carregar tarefas do storage...
      }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(value: string, date: string) {
        let task: Task = {value: value, date: new Date(date), done: false};
        this.tasks.push(task);
        console.log(this.tasks);
    }

    public delTask(index: number) {
        this.tasks.splice(index, 1);
    }
}



interface Task {
    value: string;
    date: Date;
    done?: boolean;
}