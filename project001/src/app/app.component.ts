import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['id', 'name', 'unit', 'color'];

  datos: Character[] = [
    new Character(1, 'Hoshino Ichika', 'Leo/Need', '#33AAEE'),
    new Character(2, 'Tenma Saki', 'Leo/Need', '#FFDD45'),
    new Character(3, 'Mochizuki Honami', 'Leo/Need', '#EE6666'),
    new Character(4, 'Hinomori Shiho', 'Leo/Need', '#BBDE22'),
    new Character(5, 'Azusawa Kohane', 'Vivid BAD SQUAD', '#FF679A'),
    new Character(6, 'Shiraishi An', 'Vivid BAD SQUAD', '#00BBDC'),
    new Character(7, 'Shinonome Akito', 'Vivid BAD SQUAD', '#FF7721'),
    new Character(8, 'Aoyagi Toya', 'Vivid BAD SQUAD', '#0077DD'),
    new Character(9, 'Yoisaki Kanade', '25-ji, Nightcord de', '#BB6588'),
    new Character(10, 'Asahina Mafuyu', '25-ji, Nightcord de', '#8889CC'),
    new Character(11, 'Shinonome Ena', '25-ji, Nightcord de', '#CCAA87'),
    new Character(12, 'Akiyama Mizuki', '25-ji, Nightcord de', '#E4A8CA'),
  ];

  dataSource: any;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.datos);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}

export class Character {
  constructor(public id: number, public name: string, public unit: string, public color: string) {
  }
}