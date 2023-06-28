import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  datos =  [
    {
      "name":"Mizuki Akiyama",
      "unit":"25-ji, Nightcord de.",
      "info":"They/them trans icon and Ena's partner. Looks at a rainbow and ask \"where's the pink\".",
      "pic": "../assets/mizuki.png"
    },
    {
      "name":"Shinonome Ena",
      "unit":"25-ji, Nightcord de.",
      "info":"Imposter Syndrome Queen and Mizuki's gf. Her art isn’t as popular as her instagram.",
      "pic": "../assets/ena.png"
    },
    {
      "name":"Asahina Mafuyu",
      "unit":"25-ji, Nightcord de.",
      "info":"Tired of existing and Kanade's gf. She desperately needs antidepressants/therapy.",
      "pic": "../assets/mafuyu.png"
    },
    {
      "name":"Yoisaki Kanade",
      "unit":"25-ji, Nightcord de.",
      "info":"Hikikomori and Mafuyu's gf. She will probably die if ever exposed to either the sun or grass.",
      "pic": "../assets/kanade.png"
    }
  ]

  retornar() {
    return this.datos;
  }
}