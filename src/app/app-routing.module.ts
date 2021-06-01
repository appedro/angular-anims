import { GalleryComponent } from './gallery/gallery.component';
import { ArticleComponent } from './article/article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ArticleComponent,

},
{
  path: 'gallery',
  component: GalleryComponent,
  data:{
    animation: "bounce"
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
