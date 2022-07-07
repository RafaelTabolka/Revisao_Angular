import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaApiComponent } from './tabela-api.component';

describe('TabelaApiComponent', () => {
  let component: TabelaApiComponent;
  let fixture: ComponentFixture<TabelaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
