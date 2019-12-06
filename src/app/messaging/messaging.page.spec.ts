import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagingPage } from './messaging.page';

describe('MessagingPage', () => {
  let component: MessagingPage;
  let fixture: ComponentFixture<MessagingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
