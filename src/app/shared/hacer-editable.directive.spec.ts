import { HacerEditableDirective } from './hacer-editable.directive';
import { ElementRef } from '@angular/core';

describe('HacerEditableDirective', () => {

  let element: ElementRef;
  it('should create an instance', () => {
    const directive = new HacerEditableDirective(element);
    expect(directive).toBeTruthy();
  });
});
