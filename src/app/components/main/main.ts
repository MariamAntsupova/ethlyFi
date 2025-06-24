import { Component } from '@angular/core';
import { Home } from '../home/home';
import { About } from "../about/about";
import { Features } from '../features/features';
import { LaverageYield } from "../laverage-yield/laverage-yield";
import { Collaborations } from "../collaborations/collaborations";
import { Questions } from '../questions/questions';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-main',
  imports: [Home, About, Features, LaverageYield, Collaborations, Questions, Footer],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
