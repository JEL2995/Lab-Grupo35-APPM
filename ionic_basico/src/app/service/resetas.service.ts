import { Injectable } from '@angular/core';
import { Recetas } from '../interfase/recetas';

@Injectable({
  providedIn: 'root'
})
export class ResetasService {

  recetas: Recetas[]=[
    {
      id: 1, 
      nombre: 'Pizza', 
      image: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
      ingredientes: ["queso","salsa", "peperoni", "harina", "especies","sal"]
    },
    {
      id: 2, 
      nombre: 'Chop suey de pollo', 
      image: 'https://cdn.kiwilimon.com/brightcove/6516/6516.jpg',
      ingredientes: ['2 Cucharadas de Aceite de ajonjolí',
      '1/2 Cebolla fileteada',
      '1 Diente de Ajo picado finamente',
      '400 Gramos de Pechuga de pollo cortada en cubos',
      '1 Pimiento morrón rojo cortado en bastones',
      '1 Taza de Brócoli cocido y cortado en ramilletes pequeños',
      '1/2 Taza de Apio cortado en medias lunas',
      '2 Zanahorias cortadas en tiras',
      '2 Tazas de Germen de soya',
      '1 Calabaza cortada en tiras',
      '1 Cucharada de Sal con ajo en polvo',
      '5 Cucharadas de Salsa de Soya MAGGI']
    },
    {
      id: 3, 
      nombre: 'Pollo a la mexicana', 
      image: 'https://d1uz88p17r663j.cloudfront.net/resized/08d45a55fe49e611abde012a9b72d8bb_POLLO_A_LA_MEXICANA_150_1200_600.jpg',
      ingredientes: [
        '1/2 Cebolla asada'
,'2 Dientes de Ajo asados'
,'4 Jitomates asados'
,'1/2 Taza de Agua'
,'2 Cubos de Concentrado de Tomate con Pollo CONSOMATE'
,'2 Cucharadas de Aceite de maíz'
,'1/2 Cebolla fileteada'
,'5 Muslos o piernas de pollo cocidos'
,'3 Jitomates cortados en cubos pequeños'
,'2 Chiles jalapeño cortados en tiras'
,'2 Ramitas de Cilantro fresco desinfectadas y picadas finamente'
      ]
    },
    {
      id: 4, 
      nombre: 'Paletas de fresa con chamoy', 
      image: 'https://images.aws.nestle.recipes/resized/f1b3167c3cff6274361a3f7a87974be2_paletas_de_fresa_con_chamoy_1200_600.jpg',
      ingredientes: [
        '2 Tazas de Fresas congeladas'
        ,'1 1/2 Tazas de Agua'
        ,'1/2 Taza de Azúcar'
        ,'8 Vasos de plástico (4 oz c/u)'
        ,'8 Vasos de plástico (1 oz c/u)'
        ,'8 Palitos de madera para paleta'
        ,'1/2 Taza de Concentrado de jamaica'
        ,'4 Cucharadas de Chile con limón en polvo'
        ,'1 Cucharada de Jugo MAGGI'
        ,'1/4 Taza de Chamoy líquido'

      ]
    },
    {
      id: 5, 
      nombre: 'Lasaña', 
      image: 'https://static01.nyt.com/images/2023/08/31/multimedia/RS-Lasagna-hkjl/RS-Lasagna-hkjl-superJumbo.jpg',
      ingredientes: [
        '3 1/2 libras de carne de res molida'
        ,'2 cucharaditas de ajo en polvo Ajo en polvo'
        ,'2 cucharadas de Caldo de Carne de Res MAGGI®'
        ,'1 cucharada de aceite vegetal'
        ,'1/3 taza de cebolla cortada finamente'
        ,'3 dientes de ajo cortados finamente'
        ,'1/2 taza de apio cortado finamente'
        ,'1 sobre de Salsa De Tomate Bolognesa MAGGI®'
        ,'3/4 taza de agua'
        ,'4 hojas de laurel'
        ,'3/4 libra de pasta para lasaña cocida Pasta de lasaña precocida'
        ,'2 tazas de queso mozzarella rallado'
        ,'Sal y pimienta al gusto'
        ,'1 taza de queso parmesano'

      ]
    },
  ];

  constructor() { }
  getReceta(idReceta: number){
    return {...this.recetas.find(
      (receta: Recetas) =>{
        return receta.id === idReceta
      }
    )};
  }

  getRecetas(){
    return [...this.recetas];
  }
  

}
