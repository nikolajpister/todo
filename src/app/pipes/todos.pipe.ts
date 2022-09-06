import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Pipe({
  name: 'todos'
})
export class TodosPipe implements PipeTransform {

  transform(value: TodoItem[], done: boolean) {
    console.log(done)
    return value?.length ? value.filter(item => item.checked === done) : value;
  }

}
