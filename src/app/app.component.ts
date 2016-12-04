import { Component } from '@angular/core';
export class Hero {
  name: string;
  event_name: string;
  email:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    heroes :Hero[] = [{name: 'milad',event_name: 'party',email:'m@gmail.com'}];
    local : Hero[];
    removed : Hero[];
    selectedHero :Hero;

  ngOnInit(){                             
     this.local = JSON.parse(localStorage.getItem("heroes"));

      if (this.local!=null && this.local.length > 1){

          this.heroes = this.local ;
          
      }
   }

  addHero(hero: Hero){
    if(hero.name){
      this.heroes.push(hero);
      localStorage.setItem("heroes", JSON.stringify(this.heroes));

    }
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  update(hero: Hero): void{
     const index = this.heroes.indexOf(this.selectedHero);
     this.heroes[index] = hero;
     localStorage.setItem("heroes", JSON.stringify(this.heroes));
     this.selectedHero = null;
  }

  delete(hero:Hero): void {
    const index = this.heroes.indexOf(hero);
    this.removed = this.heroes.splice(index, 1);
    localStorage.setItem("heroes", JSON.stringify(this.heroes));
  }
}
