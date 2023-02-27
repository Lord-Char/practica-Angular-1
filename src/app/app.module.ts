import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { SobreSerieComponent } from './componente/sobre-serie/sobre-serie.component';
import { SinopsisComponent } from './componente/sinopsis/sinopsis.component';
import { PersonajesComponent } from './componente/personajes/personajes.component';
import { ProduccionYLanzamientoComponent } from './componente/produccion-y-lanzamiento/produccion-y-lanzamiento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componente/login/login.component';
import { CarruselDeImagenesComponent } from './componente/carrusel-de-imagenes/carrusel-de-imagenes.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './componente/footer/footer.component';
//import { SlideComponent } from "ngx-bootstrap/carousel";
//import { SlideComponent_1 as SlideComponent } from "ngx-bootstrap/carousel";

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        AcercaDeComponent,
        SobreSerieComponent,
        SinopsisComponent,
        PersonajesComponent,
        ProduccionYLanzamientoComponent,
        LoginComponent,
        CarruselDeImagenesComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        BrowserModule,
        NgbModule,
        BrowserAnimationsModule,
        CarouselModule.forRoot(),
        HttpClientModule,
        //SlideComponent,
        //SlideComponent_1
    ]
})
export class AppModule { }
