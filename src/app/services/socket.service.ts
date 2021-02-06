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

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(): void {
    console.log('Update');

    this.socket.emit('update', 'Update');
  }

  public onUpdate(): Observable<string> {
    return new Observable<string>(observer => {
        this.socket.on('update', (data: string) => observer.next(data));
    });
}

  public onEvent(event: string): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}