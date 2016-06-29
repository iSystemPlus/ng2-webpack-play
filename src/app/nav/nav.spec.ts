import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import {
  beforeEachProviders,
  describe,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { Nav } from './nav.component';

describe('Nav', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Nav
  ]);

  it('should log ngOnInit', inject([ Nav ], (nav) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    nav.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
