import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ComponentNameComponent } from "./component-name/component-name.component";

export const routes: Routes = [
    {path: "", component: AppComponent},
    {path: "about", component: ComponentNameComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingMdoule{}