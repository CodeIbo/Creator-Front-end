import { Injectable, Injector, ApplicationRef } from '@angular/core';
import {
  NgElementStrategy,
  NgElementStrategyEvent,
  NgElementStrategyFactory,
  createCustomElement,
} from '@angular/elements';
import { Observable, Subject, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomTagsService {
  constructor(private injector: Injector, private appRef: ApplicationRef) {}

  public initializeCustomTags(
    elements: { component: any; selector: string }[]
  ): void {
    this.appRef.isStable
      .pipe(first((stable) => stable === true))
      .subscribe(() => {
        elements.forEach((element) =>
          this.registerCustomTag(element.component, element.selector)
        );
      });
  }

  private registerCustomTag(component: any, selector: string): void {
    if (!customElements.get(selector)) {
      const elementConfig = createCustomElement(component, {
        injector: this.injector,
        strategyFactory: new CustomStrategyFactory(component, this.injector),
      });
      customElements.define(selector, elementConfig);
    }
  }
}

class CustomStrategyFactory implements NgElementStrategyFactory {
  constructor(private component: any, private injector: Injector) {}

  create(): NgElementStrategy {
    return new DefaultStrategy(this.component, this.injector);
  }
}

class DefaultStrategy implements NgElementStrategy {
  inputs: { [key: string]: any } = {};

  private eventsSubject = new Subject<NgElementStrategyEvent>();
  private observer: MutationObserver | undefined;

  events: Observable<NgElementStrategyEvent> =
    this.eventsSubject.asObservable();

  constructor(private component: any, private injector: Injector) {
    console.log(this.component);
  }

  connect(element: HTMLElement): void {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName) {
          const newValue = element.getAttribute(mutation.attributeName);

          this.setInputValue(mutation.attributeName, newValue);
        }
      });
    });
    this.observer.observe(element, {
      attributes: true,
      attributeOldValue: true,
    });
  }

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      console.log('disconnect');
    }
  }

  getInputValue(propName: string): any {
    return this.inputs[propName];
  }

  setInputValue(propName: string, value: any): void {
    let parsedValue = null;
    try {
      parsedValue = JSON.parse(value);
    } catch (e) {
      parsedValue = value;
    }
    this.inputs[propName] = value;
  }
}
