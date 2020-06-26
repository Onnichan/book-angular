import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookService{

  public books:Book[]; 

  constructor(){
    this.books = [
      {
        name:'A corazon abierto',
        author:'Elvira Lindo',
        isbn:'12345678',
        editorial:'Seix Barral',
        price: 20.90,
        thematic:'Novela literaria',
        pages: 384,
        img:'https://static1planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/311/m_libros/portada_a-corazon-abierto_elvira-lindo_201912311129.jpg',
        description: 'Partiendo de un episodio ocurrido en Madrid en 1939, la narradora de esta historia cuenta la apasionada y tormentosa relación de sus padres, y cómo la personalidad desmedida de él y el corazón débil de ella marcaron el pulso de la vida de toda la familia.'
      },
      {
        name:'El mensaje de Pandora',
        author:'Javier Sierra',
        isbn:'31313131',
        editorial:'Editorial planeta',
        price: 15.90,
        thematic:'Novela contemporánea',
        pages: 192,
        img:'https://static9planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/319/m_libros/portada_el-mensaje-de-pandora_javier-sierra_202004231553.jpg',
        description: 'El día que Arys cumplió dieciocho años recibió esta extraña carta. Le llegó desde Atenas envuelta en papel de estraza con el apremio de que debía leerla de inmediato. Escrita en circunstancias excepcionales, en ella su tía evoca el último viaje que hicieron juntas por el sur de Europa y le confía un secreto que llevaba eones guardándose: que los antiguos mitos esconden la clave para comprender el origen de la vida, las enfermedades e incluso nuestro futuro. '
      },
      {
        name:'La madre de Frankenstein',
        author:'Almudena Grandes',
        isbn:'45125878',
        editorial:'Tusquets Editores S.A.',
        price: 22.90,
        thematic:'Novela literaria',
        pages: 560,
        img:'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/310/m_libros/portada_la-madre-de-frankenstein_almudena-grandes_201912021812.jpg',
        description: 'En 1954, el joven psiquiatra Germán Velázquez vuelve a España para trabajar en el manicomio de mujeres de Ciempozuelos, al sur de Madrid. Tras salir al exilio en 1939, ha vivido quince años en Suiza, acogido por la familia del doctor Goldstein. En Ciempozuelos, Germán se reencuentra con Aurora Rodríguez Carballeira, una parricida paranoica, inteligentísima, que le fascinó a los trece años, y conoce a una auxiliar de enfermería, María Castejón, a la que doña Aurora enseñó a leer y a escribir cuando era una niña. Germán, atraído por María, no entiende el rechazo de ésta, y sospecha que su vida esconde muchos secretos. El lector descubrirá su origen modesto como nieta del jardinero del manicomio, sus años de criada en Madrid, su desdichada historia de amor, a la par que los motivos por los que Germán ha regresado a España. Almas gemelas que quieren huir de sus respectivos pasados, Germán y María quieren darse una oportunidad, pero viven en un país humillado, donde los pecados se convierten en delitos, y el puritanismo, la moral oficial, encubre todo tipo de abusos y atropellos.'
      },
      {
        name:'La sospecha de Sofía',
        author:'Paloma Sánchez Garnica',
        isbn:'32145878',
        editorial:'Booket',
        price: 12.95,
        thematic:'Novela contemporánea',
        pages: 656,
        img:'https://static6planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/316/m_libros/portada_la-sospecha-de-sofia_paloma-sanchez-garnica_202004221853.jpg',
        description: 'La anodina vida de Sofía y Daniel cambia radicalmente cuando él recibe una carta anónima en la que se le dice que Sagrario, a la que venera, no es su verdadera madre y que si quiere conocer la verdad de su origen debe ir a París esa misma noche. Intrigado, pregunta a su padre por esta cuestión y él le recomienda que lo deje pasar, que no remueva el pasado. Sin embargo, hay preguntas que necesitan una respuesta y esta búsqueda desencadenará una sucesión de terribles acontecimientos y encuentros inesperados de infortunado desenlace que trastocará su vida y la de su mujer, Sofía, para siempre. Madrid, París y su mayo del 68, el muro de Berlín, la Stasi y la KGB, los servicios de contraespionaje en la España tardofranquista y tres personajes en busca de su identidad son las claves de esta fantástica novela con el inconfundible sello de Paloma Sánchez-Garnica.'
      },
      {
        name:'Patria',
        author:'Fernando Aramburu',
        isbn:'32548878',
        editorial:'Maxi Tusquets',
        price: 13.95,
        thematic:'Novela literaria',
        pages: 656,
        img:'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/300/m_libros/portada_patria_fernando-aramburu_201906211932.jpg',
        description: 'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron. ¿Podrá convivir con quienes la acosaron antes y después del atentado que trastocó su vida y la de su familia? ¿Podrá saber quién fue el encapuchado que un día lluvioso mató a su marido, cuando volvía de su empresa de transportes? Por más que llegue a escondidas, la presencia de Bittori alterará la falsa tranquilidad del pueblo, sobre todo de su vecina Miren, amiga íntima en otro tiempo, y madre de Joxe Mari, un terrorista encarcelado y sospechoso de los peores temores de Bittori. ¿Qué pasó entre esas dos mujeres? ¿Qué ha envenenado la vida de sus hijos y sus maridos tan unidos en el pasado? Con sus desgarros disimulados y sus convicciones inquebrantables, con sus heridas y sus valentías, la historia incandescente de sus vidas antes y después del cráter que fue la muerte del Txato, nos habla de la imposibilidad de olvidar y de la necesidad de perdón en una comunidad rota por el fanatismo político.'
      },
      {
        name:'A corazon abierto',
        author:'Elvira Lindo',
        isbn:'12345678',
        editorial:'Seix Barral',
        price: 20.90,
        thematic:'Novela literaria',
        pages: 384,
        img:'https://static1planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/311/m_libros/portada_a-corazon-abierto_elvira-lindo_201912311129.jpg',
        description: 'Partiendo de un episodio ocurrido en Madrid en 1939, la narradora de esta historia cuenta la apasionada y tormentosa relación de sus padres, y cómo la personalidad desmedida de él y el corazón débil de ella marcaron el pulso de la vida de toda la familia.'
      },
      {
        name:'El mensaje de Pandora',
        author:'Javier Sierra',
        isbn:'31313131',
        editorial:'Editorial planeta',
        price: 15.90,
        thematic:'Novela contemporánea',
        pages: 192,
        img:'https://static9planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/319/m_libros/portada_el-mensaje-de-pandora_javier-sierra_202004231553.jpg',
        description: 'El día que Arys cumplió dieciocho años recibió esta extraña carta. Le llegó desde Atenas envuelta en papel de estraza con el apremio de que debía leerla de inmediato. Escrita en circunstancias excepcionales, en ella su tía evoca el último viaje que hicieron juntas por el sur de Europa y le confía un secreto que llevaba eones guardándose: que los antiguos mitos esconden la clave para comprender el origen de la vida, las enfermedades e incluso nuestro futuro. '
      },
      {
        name:'La madre de Frankenstein',
        author:'Almudena Grandes',
        isbn:'45125878',
        editorial:'Tusquets Editores S.A.',
        price: 22.90,
        thematic:'Novela literaria',
        pages: 560,
        img:'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/310/m_libros/portada_la-madre-de-frankenstein_almudena-grandes_201912021812.jpg',
        description: 'En 1954, el joven psiquiatra Germán Velázquez vuelve a España para trabajar en el manicomio de mujeres de Ciempozuelos, al sur de Madrid. Tras salir al exilio en 1939, ha vivido quince años en Suiza, acogido por la familia del doctor Goldstein. En Ciempozuelos, Germán se reencuentra con Aurora Rodríguez Carballeira, una parricida paranoica, inteligentísima, que le fascinó a los trece años, y conoce a una auxiliar de enfermería, María Castejón, a la que doña Aurora enseñó a leer y a escribir cuando era una niña. Germán, atraído por María, no entiende el rechazo de ésta, y sospecha que su vida esconde muchos secretos. El lector descubrirá su origen modesto como nieta del jardinero del manicomio, sus años de criada en Madrid, su desdichada historia de amor, a la par que los motivos por los que Germán ha regresado a España. Almas gemelas que quieren huir de sus respectivos pasados, Germán y María quieren darse una oportunidad, pero viven en un país humillado, donde los pecados se convierten en delitos, y el puritanismo, la moral oficial, encubre todo tipo de abusos y atropellos.'
      },
      {
        name:'La sospecha de Sofía',
        author:'Paloma Sánchez Garnica',
        isbn:'32145878',
        editorial:'Booket',
        price: 12.95,
        thematic:'Novela contemporánea',
        pages: 656,
        img:'https://static6planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/316/m_libros/portada_la-sospecha-de-sofia_paloma-sanchez-garnica_202004221853.jpg',
        description: 'La anodina vida de Sofía y Daniel cambia radicalmente cuando él recibe una carta anónima en la que se le dice que Sagrario, a la que venera, no es su verdadera madre y que si quiere conocer la verdad de su origen debe ir a París esa misma noche. Intrigado, pregunta a su padre por esta cuestión y él le recomienda que lo deje pasar, que no remueva el pasado. Sin embargo, hay preguntas que necesitan una respuesta y esta búsqueda desencadenará una sucesión de terribles acontecimientos y encuentros inesperados de infortunado desenlace que trastocará su vida y la de su mujer, Sofía, para siempre. Madrid, París y su mayo del 68, el muro de Berlín, la Stasi y la KGB, los servicios de contraespionaje en la España tardofranquista y tres personajes en busca de su identidad son las claves de esta fantástica novela con el inconfundible sello de Paloma Sánchez-Garnica.'
      },
      {
        name:'Patria',
        author:'Fernando Aramburu',
        isbn:'32548878',
        editorial:'Maxi Tusquets',
        price: 13.95,
        thematic:'Novela literaria',
        pages: 656,
        img:'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/300/m_libros/portada_patria_fernando-aramburu_201906211932.jpg',
        description: 'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron. ¿Podrá convivir con quienes la acosaron antes y después del atentado que trastocó su vida y la de su familia? ¿Podrá saber quién fue el encapuchado que un día lluvioso mató a su marido, cuando volvía de su empresa de transportes? Por más que llegue a escondidas, la presencia de Bittori alterará la falsa tranquilidad del pueblo, sobre todo de su vecina Miren, amiga íntima en otro tiempo, y madre de Joxe Mari, un terrorista encarcelado y sospechoso de los peores temores de Bittori. ¿Qué pasó entre esas dos mujeres? ¿Qué ha envenenado la vida de sus hijos y sus maridos tan unidos en el pasado? Con sus desgarros disimulados y sus convicciones inquebrantables, con sus heridas y sus valentías, la historia incandescente de sus vidas antes y después del cráter que fue la muerte del Txato, nos habla de la imposibilidad de olvidar y de la necesidad de perdón en una comunidad rota por el fanatismo político.'
      },
      {
        name:'A corazon abierto',
        author:'Elvira Lindo',
        isbn:'12345678',
        editorial:'Seix Barral',
        price: 20.90,
        thematic:'Novela literaria',
        pages: 384,
        img:'https://static1planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/311/m_libros/portada_a-corazon-abierto_elvira-lindo_201912311129.jpg',
        description: 'Partiendo de un episodio ocurrido en Madrid en 1939, la narradora de esta historia cuenta la apasionada y tormentosa relación de sus padres, y cómo la personalidad desmedida de él y el corazón débil de ella marcaron el pulso de la vida de toda la familia.'
      },
      {
        name:'El mensaje de Pandora',
        author:'Javier Sierra',
        isbn:'31313131',
        editorial:'Editorial planeta',
        price: 15.90,
        thematic:'Novela contemporánea',
        pages: 192,
        img:'https://static9planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/319/m_libros/portada_el-mensaje-de-pandora_javier-sierra_202004231553.jpg',
        description: 'El día que Arys cumplió dieciocho años recibió esta extraña carta. Le llegó desde Atenas envuelta en papel de estraza con el apremio de que debía leerla de inmediato. Escrita en circunstancias excepcionales, en ella su tía evoca el último viaje que hicieron juntas por el sur de Europa y le confía un secreto que llevaba eones guardándose: que los antiguos mitos esconden la clave para comprender el origen de la vida, las enfermedades e incluso nuestro futuro. '
      },
      {
        name:'La madre de Frankenstein',
        author:'Almudena Grandes',
        isbn:'45125878',
        editorial:'Tusquets Editores S.A.',
        price: 22.90,
        thematic:'Novela literaria',
        pages: 560,
        img:'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/310/m_libros/portada_la-madre-de-frankenstein_almudena-grandes_201912021812.jpg',
        description: 'En 1954, el joven psiquiatra Germán Velázquez vuelve a España para trabajar en el manicomio de mujeres de Ciempozuelos, al sur de Madrid. Tras salir al exilio en 1939, ha vivido quince años en Suiza, acogido por la familia del doctor Goldstein. En Ciempozuelos, Germán se reencuentra con Aurora Rodríguez Carballeira, una parricida paranoica, inteligentísima, que le fascinó a los trece años, y conoce a una auxiliar de enfermería, María Castejón, a la que doña Aurora enseñó a leer y a escribir cuando era una niña. Germán, atraído por María, no entiende el rechazo de ésta, y sospecha que su vida esconde muchos secretos. El lector descubrirá su origen modesto como nieta del jardinero del manicomio, sus años de criada en Madrid, su desdichada historia de amor, a la par que los motivos por los que Germán ha regresado a España. Almas gemelas que quieren huir de sus respectivos pasados, Germán y María quieren darse una oportunidad, pero viven en un país humillado, donde los pecados se convierten en delitos, y el puritanismo, la moral oficial, encubre todo tipo de abusos y atropellos.'
      },
      {
        name:'La sospecha de Sofía',
        author:'Paloma Sánchez Garnica',
        isbn:'32145878',
        editorial:'Booket',
        price: 12.95,
        thematic:'Novela contemporánea',
        pages: 656,
        img:'https://static6planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/316/m_libros/portada_la-sospecha-de-sofia_paloma-sanchez-garnica_202004221853.jpg',
        description: 'La anodina vida de Sofía y Daniel cambia radicalmente cuando él recibe una carta anónima en la que se le dice que Sagrario, a la que venera, no es su verdadera madre y que si quiere conocer la verdad de su origen debe ir a París esa misma noche. Intrigado, pregunta a su padre por esta cuestión y él le recomienda que lo deje pasar, que no remueva el pasado. Sin embargo, hay preguntas que necesitan una respuesta y esta búsqueda desencadenará una sucesión de terribles acontecimientos y encuentros inesperados de infortunado desenlace que trastocará su vida y la de su mujer, Sofía, para siempre. Madrid, París y su mayo del 68, el muro de Berlín, la Stasi y la KGB, los servicios de contraespionaje en la España tardofranquista y tres personajes en busca de su identidad son las claves de esta fantástica novela con el inconfundible sello de Paloma Sánchez-Garnica.'
      },
      {
        name:'Patria',
        author:'Fernando Aramburu',
        isbn:'32548878',
        editorial:'Maxi Tusquets',
        price: 13.95,
        thematic:'Novela literaria',
        pages: 656,
        img:'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/300/m_libros/portada_patria_fernando-aramburu_201906211932.jpg',
        description: 'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron. ¿Podrá convivir con quienes la acosaron antes y después del atentado que trastocó su vida y la de su familia? ¿Podrá saber quién fue el encapuchado que un día lluvioso mató a su marido, cuando volvía de su empresa de transportes? Por más que llegue a escondidas, la presencia de Bittori alterará la falsa tranquilidad del pueblo, sobre todo de su vecina Miren, amiga íntima en otro tiempo, y madre de Joxe Mari, un terrorista encarcelado y sospechoso de los peores temores de Bittori. ¿Qué pasó entre esas dos mujeres? ¿Qué ha envenenado la vida de sus hijos y sus maridos tan unidos en el pasado? Con sus desgarros disimulados y sus convicciones inquebrantables, con sus heridas y sus valentías, la historia incandescente de sus vidas antes y después del cráter que fue la muerte del Txato, nos habla de la imposibilidad de olvidar y de la necesidad de perdón en una comunidad rota por el fanatismo político.'
      },
      {
        name:'A corazon abierto',
        author:'Elvira Lindo',
        isbn:'12345678',
        editorial:'Seix Barral',
        price: 20.90,
        thematic:'Novela literaria',
        pages: 384,
        img:'https://static1planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/311/m_libros/portada_a-corazon-abierto_elvira-lindo_201912311129.jpg',
        description: 'Partiendo de un episodio ocurrido en Madrid en 1939, la narradora de esta historia cuenta la apasionada y tormentosa relación de sus padres, y cómo la personalidad desmedida de él y el corazón débil de ella marcaron el pulso de la vida de toda la familia.'
      },
      {
        name:'El mensaje de Pandora',
        author:'Javier Sierra',
        isbn:'31313131',
        editorial:'Editorial planeta',
        price: 15.90,
        thematic:'Novela contemporánea',
        pages: 192,
        img:'https://static9planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/319/m_libros/portada_el-mensaje-de-pandora_javier-sierra_202004231553.jpg',
        description: 'El día que Arys cumplió dieciocho años recibió esta extraña carta. Le llegó desde Atenas envuelta en papel de estraza con el apremio de que debía leerla de inmediato. Escrita en circunstancias excepcionales, en ella su tía evoca el último viaje que hicieron juntas por el sur de Europa y le confía un secreto que llevaba eones guardándose: que los antiguos mitos esconden la clave para comprender el origen de la vida, las enfermedades e incluso nuestro futuro. '
      },
      {
        name:'La madre de Frankenstein',
        author:'Almudena Grandes',
        isbn:'45125878',
        editorial:'Tusquets Editores S.A.',
        price: 22.90,
        thematic:'Novela literaria',
        pages: 560,
        img:'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/310/m_libros/portada_la-madre-de-frankenstein_almudena-grandes_201912021812.jpg',
        description: 'En 1954, el joven psiquiatra Germán Velázquez vuelve a España para trabajar en el manicomio de mujeres de Ciempozuelos, al sur de Madrid. Tras salir al exilio en 1939, ha vivido quince años en Suiza, acogido por la familia del doctor Goldstein. En Ciempozuelos, Germán se reencuentra con Aurora Rodríguez Carballeira, una parricida paranoica, inteligentísima, que le fascinó a los trece años, y conoce a una auxiliar de enfermería, María Castejón, a la que doña Aurora enseñó a leer y a escribir cuando era una niña. Germán, atraído por María, no entiende el rechazo de ésta, y sospecha que su vida esconde muchos secretos. El lector descubrirá su origen modesto como nieta del jardinero del manicomio, sus años de criada en Madrid, su desdichada historia de amor, a la par que los motivos por los que Germán ha regresado a España. Almas gemelas que quieren huir de sus respectivos pasados, Germán y María quieren darse una oportunidad, pero viven en un país humillado, donde los pecados se convierten en delitos, y el puritanismo, la moral oficial, encubre todo tipo de abusos y atropellos.'
      },
      {
        name:'La sospecha de Sofía',
        author:'Paloma Sánchez Garnica',
        isbn:'32145878',
        editorial:'Booket',
        price: 12.95,
        thematic:'Novela contemporánea',
        pages: 656,
        img:'https://static6planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/316/m_libros/portada_la-sospecha-de-sofia_paloma-sanchez-garnica_202004221853.jpg',
        description: 'La anodina vida de Sofía y Daniel cambia radicalmente cuando él recibe una carta anónima en la que se le dice que Sagrario, a la que venera, no es su verdadera madre y que si quiere conocer la verdad de su origen debe ir a París esa misma noche. Intrigado, pregunta a su padre por esta cuestión y él le recomienda que lo deje pasar, que no remueva el pasado. Sin embargo, hay preguntas que necesitan una respuesta y esta búsqueda desencadenará una sucesión de terribles acontecimientos y encuentros inesperados de infortunado desenlace que trastocará su vida y la de su mujer, Sofía, para siempre. Madrid, París y su mayo del 68, el muro de Berlín, la Stasi y la KGB, los servicios de contraespionaje en la España tardofranquista y tres personajes en busca de su identidad son las claves de esta fantástica novela con el inconfundible sello de Paloma Sánchez-Garnica.'
      },
      {
        name:'Patria',
        author:'Fernando Aramburu',
        isbn:'32548878',
        editorial:'Maxi Tusquets',
        price: 13.95,
        thematic:'Novela literaria',
        pages: 656,
        img:'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/300/m_libros/portada_patria_fernando-aramburu_201906211932.jpg',
        description: 'El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron. ¿Podrá convivir con quienes la acosaron antes y después del atentado que trastocó su vida y la de su familia? ¿Podrá saber quién fue el encapuchado que un día lluvioso mató a su marido, cuando volvía de su empresa de transportes? Por más que llegue a escondidas, la presencia de Bittori alterará la falsa tranquilidad del pueblo, sobre todo de su vecina Miren, amiga íntima en otro tiempo, y madre de Joxe Mari, un terrorista encarcelado y sospechoso de los peores temores de Bittori. ¿Qué pasó entre esas dos mujeres? ¿Qué ha envenenado la vida de sus hijos y sus maridos tan unidos en el pasado? Con sus desgarros disimulados y sus convicciones inquebrantables, con sus heridas y sus valentías, la historia incandescente de sus vidas antes y después del cráter que fue la muerte del Txato, nos habla de la imposibilidad de olvidar y de la necesidad de perdón en una comunidad rota por el fanatismo político.'
      }
    ]
  }

  getBooks(){
    return this.books;
  }

  SearchBook(title:string){
    let bookCollection:Book;
    this.books.forEach(book=>{
      if(book.name.indexOf(title)>=0){
        bookCollection = book;
      }
    });
    return bookCollection;
  }
}

export interface Book{
  name:string;
  author:string;
  isbn:string;
  editorial:string;
  price:number;
  thematic:string;
  pages:number;
  img:string;
  description:string;
}