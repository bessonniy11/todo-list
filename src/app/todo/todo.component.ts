import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ITask} from "../model/task";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoForm !: FormGroup;
  news: ITask[] = [];
  inprogress: ITask[] = [];
  done: ITask[] = [];
  cancelled: ITask[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required]
    })
  }

  addTask () {
    this.news.push({
      description: this.todoForm.value.item,
      done: false
    })
  }

  deleteTask(i: number, colum: string) {
    switch (colum) {
      case 'news':
        this.news.splice(i, 1);
        break;
      case 'inprogress':
        this.inprogress.splice(i, 1);
        break;
      case 'done':
        this.done.splice(i, 1);
        break;
      case 'cancelled':
        this.cancelled.splice(i, 1);
        break;
    }

  }

  editTask(i: number, tasks: string) {

  }

  drop(event: CdkDragDrop<ITask[]>) {
    console.log('event after', event);
    if (event.previousContainer === event.container) {
      console.log('event.container', event.container);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('event.previousIndex', event.previousIndex)
      console.log('event.currentIndex', event.currentIndex)
    } else {
      console.log('else')
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log('event before', event);
      console.log('event.previousContainer.data', event.previousContainer.data);
    }
  }

}
