import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    public numero1:number;
    public numero2:number;
    public resultado:number;
    public restM:number;

    sumar (){
      this.resultado= this.numero1 +this.numero2;
    }
    restar(){
      this.resultado= this.numero1-this.numero2;
    }
    dividir(){
      if(this.numero2==0){
       alert("No se puede divir por 0")
      }else{
        this.resultado= (this.numero1)/(this.numero2);  
        this.restM=(this.numero1)%(this.numero2);
      }  
    }
    multiplicar(){
      this.resultado= this.numero1*this.numero2;
    }

    borrar(){
      this.numero1 = null;
      this.numero2 = null;
      this.restM = null;
      this.resultado = null;
    }

  }

