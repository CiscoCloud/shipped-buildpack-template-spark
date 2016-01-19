Angualar 1.4 is used in client code to communicate with spark api's.     
`app` directory is having code related to application whereas `vendor` directory is having angular and bootstrap libraries.

## Controllers

`MainController` is entry point of application. It configures the application and handles authentication by `token`.

`RoomsController` and `MessagesController` are responsible for handling rooms and messages api respectively.


## Services
`RoomsService`, `MessagesService` and `MembershipsService` are built on the top of Angular's `$resource`. 
