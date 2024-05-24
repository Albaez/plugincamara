export interface Evento {
    id: string;
    nombre: string;
    descripcion: string;
  }


export const events: Evento[] = [
    {id: '1', nombre: 'Evento1', descripcion: 'Streaming'},
    {id: '2', nombre: 'Evento2', descripcion: 'Streaming'},
    {id: '3', nombre: 'Evento3', descripcion: 'Streaming'}
]
