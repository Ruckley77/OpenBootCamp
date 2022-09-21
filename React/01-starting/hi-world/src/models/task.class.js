import { LEVELS } from "./levels.enum"
// defining tasks, importing the levels the task can be.
export class Task {
  name = ""
  description = ""
  completed = false //default value when not specified
  level = LEVELS.NORMAL //default value when not specified

  // in order to create tasks we have the constructor, which will receive all the parameters.
  constructor(name, description, completed,level){
    this.name = name
    this.description = description
    this.completed = completed
    this.level = level
  }
}