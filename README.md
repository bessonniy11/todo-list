# TodoList

Техническое задание: 
Реализовать todo list . Использовать angular framework и typescript
Должно быть четыре статуса : new (новый) , in progress ( в процессе) , done ( выполнено) , canceled ( отменено )
Логика передвижения между статусами:
Из New можно перевести только в in progress и canceled 
Из in progress - в done , cancelled 
Из done - перевести никуда нельзя 
Из cancelled - в new



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0. - Почему так вышло, что проект был изначально сгенерирован на ангуляр древней 12.2.0 - внезапно умерла материнка в середине недели, пришлось достать из под дивана старый ноут 7 винде и немного (если честно, то скорее много..) поиграться с версиями, чтобы проекты запускались. Старая материнка чувствует себя отлично - она в раю. На смену ей оперативно пришла новая. Страдания с работой на древних машинах завершены.  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
