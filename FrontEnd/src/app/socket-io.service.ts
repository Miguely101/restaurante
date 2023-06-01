import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { io} from 'socket.io-client';



@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  socket: any;
  readonly url:string = 'http://localhost:3122';

  constructor() {
    this.socket = io(this.url);
  }

  listenToServer(eventName:string) {
    return new Observable((Subscriber)=>{
      this.socket.on(eventName,(data:any)=>{
        Subscriber.next(data)
      })
    })
  }

  emitToServer(eventName:string,data:any) {
    this.socket.emit(eventName,data)
  }
}
