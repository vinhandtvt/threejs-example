import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-flying-births',
  templateUrl: './flying-births.component.html',
  styleUrls: ['./flying-births.component.scss'],
})
export class FlyingBirthsComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;

  private model: any;

  private animateModel() {
    if (this.model) {
      this.model.rotation.z += 0.005;
    }
  }

  private createControls = () => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.top = '0px';
    document.body.appendChild(renderer.domElement);
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //todo
  }
}
