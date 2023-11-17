  import { Component } from '@angular/core';
  import {Storage, ref, getDownloadURL, listAll, list} from '@angular/fire/storage';

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent {
    Entradas: string[];
    Entrada_1: string;
    Entrada_2: string;
    Entrada_3: string;
    Entrada_4: string;
    Entrada_5: string;
    Entrada_6: string;

    constructor(private storage: Storage)
    {
      this.Entradas = [];
      this.Entrada_1 = "https://firebasestorage.googleapis.com/v0/b/app-web-81795.appspot.com/o/Menu%2FEntradas%2Ftabla-jamones.png?alt=media&token=0b365e01-ec55-43ea-a066-8e4ea33b1674";
      this.Entrada_2 = "https://firebasestorage.googleapis.com/v0/b/app-web-81795.appspot.com/o/Menu%2FEntradas%2Ftabla-quesos.jpg?alt=media&token=4a918644-b489-45ee-8a04-f4bd2c5a7a79";
      this.Entrada_3 = "https://firebasestorage.googleapis.com/v0/b/app-web-81795.appspot.com/o/Menu%2FEntradas%2Ftabla-brushettes.jpg?alt=media&token=a78cea9c-7b65-483d-87f9-9e0e1122e9b7";
      this.Entrada_4 = "https://firebasestorage.googleapis.com/v0/b/app-web-81795.appspot.com/o/Menu%2FEntradas%2Ftabla-tzatziki.png?alt=media&token=0b48005a-2a07-46f6-80da-7232df6007ec";
      this.Entrada_5 = "https://firebasestorage.googleapis.com/v0/b/app-web-81795.appspot.com/o/Menu%2FEntradas%2Ftabla-hummus.jpg?alt=media&token=05918c8a-5c92-4ae0-88bb-3361827045f9";
      this.Entrada_6 = "https://firebasestorage.googleapis.com/v0/b/app-web-81795.appspot.com/o/Menu%2FEntradas%2Ftabla-pierogi.png?alt=media&token=54ef3e08-253b-4963-addd-7cd365d086d9";
    }

    async ngOnInit()
    {
      await this.getImages()
    }

    getImages()
    {
      const image_ref = ref(this.storage, 'Menu/Entradas');

      listAll(image_ref)
      .then(async response => {
        console.log(response);
        this.Entradas = [];
        for(let item of response.items){
          const url = await getDownloadURL(item);
          console.log(url);
          this.Entradas.push(url);
        }
      })
      .catch(error => console.log(error));
    }

  }
