import { AngularMaterialModule } from './app-material.module';

describe('AppMaterialModule', () => {
  let angularMaterialModule: AngularMaterialModule;

  beforeEach(() => {
    angularMaterialModule = new AngularMaterialModule();
  });

  it('should create an instance', () => {
    expect(angularMaterialModule).toBeTruthy();
  });
});
