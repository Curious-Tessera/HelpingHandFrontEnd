import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopcverComponent } from './popcver.component';

describe('PopcverComponent', () => {
  let component: PopcverComponent;
  let fixture: ComponentFixture<PopcverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopcverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopcverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
