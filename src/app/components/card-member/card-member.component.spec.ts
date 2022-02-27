import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardMemberComponent } from './card-member.component';

describe('CardMemberComponent', () => {
  let component: CardMemberComponent;
  let fixture: ComponentFixture<CardMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMemberComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
