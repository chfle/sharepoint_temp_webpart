import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


export default class AnzrWebPart extends BaseClientSideWebPart<null> {

  public render(): void {
    const elem = <h1>Putin was here!1!!@343434534</h1>;

    ReactDom.render(elem, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

}
