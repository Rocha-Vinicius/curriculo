import { Component, OnInit } from '@angular/core';
import { ContactStyleComponent } from 'src/app/shared/components/contact-style/contact-style.component';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {

  public icon: string = 'vader';

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      return this.icon = 'yoda';

    }
    return (this.icon = 'vader');

  }

}
