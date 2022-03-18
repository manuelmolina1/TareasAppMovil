import { Component, OnInit } from '@angular/core';

interface componente { 

icon: string;
name: string;
redirectTo: string;


}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: componente[] =[

    { 

      icon: 'accessibility',
      name: 'DESCRIPCION',
      redirectTo:'/descripcion'

    },
    { 

      icon: 'home',
      name: 'RESIDENCIA',
      redirectTo:'/residencia'
      
   },

   { 

    icon: 'bicycle',
    name: 'METAS',
    redirectTo:'/metas'
    
 
  }


  ];

  constructor() { }

  ngOnInit() {
  }

}
