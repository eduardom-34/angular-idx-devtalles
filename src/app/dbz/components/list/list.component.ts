import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // onDelete = Index value: number
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number) :void {
    //TODO emitir el ID del persnaje (no el index)
    this.onDelete.emit( index );
    
  }

}
