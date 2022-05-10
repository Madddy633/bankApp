import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {
  @Input() item:string |undefined
 @Output() onCancel=new EventEmitter()
 @Output() onDelete=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  //cancel
  cancel(){
this.onCancel.emit();
  }
  //onDelete()
delete(){
this.onDelete.emit(this.item)
  }

}
