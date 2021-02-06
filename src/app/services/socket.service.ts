import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;

  constructor() { }

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
    // this.socket = socketIo({transports: ['websocket']});

    console.log("test");
    
  }

  public send(): void {
    this.socket.emit('message');
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('message', (data: any) => observer.next(data));
    });
  }

  public onEvent(event: string): Observable<any> {
    return new Observable<Event>(observer => {
      console.log("test 2");
      
      this.socket.on(event, () => observer.next());
    });
  }
}