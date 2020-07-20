import { Injectable } from '@angular/core';
import { Task } from '../models/task'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  tasks: Task[];
  constructor() { 
  
    
  }
}
