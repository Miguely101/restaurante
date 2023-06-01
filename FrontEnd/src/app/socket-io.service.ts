import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client'
const backEndUrl= 'http://localhost:5500'

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  private clientSocket: SocketIOClient.Socket;
  constructor() { 
    this.clientSocket = socketIo.connect(backEndUrl)
  }
}
