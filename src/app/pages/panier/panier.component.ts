import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PassercommandedialogComponentComponent } from './passercommandedialog-component/passercommandedialog-component.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cartItemFunc();
    this.calculeprixtotal();
  }

  cartItem:any[];
  cartItemFunc(){
      if(localStorage.getItem('localCart')!=null){
          var cartCount=JSON.parse(localStorage.getItem('localCart')||'[]');
          this.cartItem=cartCount;
          console.log('localstorage',cartCount.length);
          console.log('localstorage',this.cartItem)
          
  }else{
      this.cartItem=[];
      
  }
}
delete(){
  localStorage.clear();
  var cartCount=JSON.parse(localStorage.getItem('localCart')||'[]');
          this.cartItem=cartCount;
}
prixtotal:number=0;
calculeprixtotal():number{
  for(let i of this.cartItem){
      this.prixtotal=this.prixtotal+i.prix;
  }
  return this.prixtotal;
}
dialoggg(){
  const dialogRef = this.dialog.open(PassercommandedialogComponentComponent, {
    data: {
        title: "NWAS NTD"
    },
    width: '600px',
    height: '300px',
    panelClass: 'epsSelectorPanel'
});
  dialogRef.updatePosition({ top: '170px', left: '500px' });
  dialogRef.afterClosed().subscribe(data => {

  });
}
}
