import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosDashboardComponent } from './graficos-dashboard.component';

describe('GraficosDashboardComponent', () => {
  let component: GraficosDashboardComponent;
  let fixture: ComponentFixture<GraficosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficosDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
