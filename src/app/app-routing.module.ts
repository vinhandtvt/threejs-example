import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubeComponent } from './cube/cube.component';
import { FlyingBirthsComponent } from './flying-births/flying-births.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  {
    path: '',
    component: CubeComponent,
  },
  {
    path: 'model',
    component: ModelComponent,
  },
  {
    path: 'birds',
    component: FlyingBirthsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
