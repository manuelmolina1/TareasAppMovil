import { Component, OnInit } from '@angular/core';



interface componente { 

  
  name: string;
  redirectTo: string;
  
  
  }


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  componentes: componente[] =[

    { 

     
      name: 'DESCRIPCION',
      redirectTo:'/descripcion'

    },
    { 

      
      name: 'RESIDENCIA',
      redirectTo:'/residencia'
      
   },

   { 

    
    name: 'METAS',
    redirectTo:'/metas'
    
 
  }


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
